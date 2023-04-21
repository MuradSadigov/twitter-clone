import React, { ChangeEvent, useRef, useState } from "react";
import {
  CalendarIcon,
  ChartBarIcon,
  EmojiHappyIcon,
  PhotographIcon,
  XIcon,
} from "@heroicons/react/outline";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";
import { Theme } from "emoji-picker-react";
import useAutosizeTextArea from "../hooks/useAutosizeTextArea";
import { db, storage } from "../firebase";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { useSession } from "next-auth/react";

const Input = () => {
  const { data: session } = useSession();

  const [input, setInput] = useState<string>("");
  const [showEmojis, setShowEmojis] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedFile, setSelectedFile] = useState<string | ArrayBuffer | null>(
    null
  );

  const filePickerRef = useRef<HTMLInputElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  useAutosizeTextArea(textAreaRef.current, input);

  const sendPost = async () => {
    if (loading) return;
    setLoading(true);
    const docRef = await addDoc(collection(db, "posts"), {
       // @ts-ignore
      id: session?.user?.uid,
      username: session?.user?.name,
      userImg: session?.user?.image,
       // @ts-ignore
      tag: session?.user?.tag,
      text: input,
      timestamp: serverTimestamp(),
    });
    const imageRef = ref(storage, `posts/${docRef.id}/image`);
    if (selectedFile) {
      let dataUrl: string;
      if (typeof selectedFile === "string") {
        dataUrl = selectedFile;
      } else {
        const uint8Array = new Uint8Array(selectedFile);
        const binaryString = uint8Array.reduce(
          (str, byte) => str + String.fromCharCode(byte),
          ""
        );
        dataUrl = btoa(binaryString);
      }
      await uploadString(imageRef, dataUrl, "data_url").then(async () => {
        const downloadURL = await getDownloadURL(imageRef);
        await updateDoc(doc(db, "posts", docRef.id), {
          image: downloadURL,
        });
      });
    }
    setLoading(false);
    setInput("");
    setSelectedFile(null);
    setShowEmojis(false);
  };

  const addEmoji = (e: EmojiClickData) => {
    let sym = e.unified.split("-");
    let codesArray: any = [];
    sym.forEach((el: any) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray);
    setInput(input + emoji);
  };

  const addImageToPost = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target || !e.target.files) return;

    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent: ProgressEvent<FileReader>) => {
      if (!readerEvent.target) return;
      setSelectedFile(readerEvent.target.result);
    };
  };

  return (
    <div
      className={`flex border-b border-gray-700 p-3 space-x-3 ${
        loading && "opacity-60"
      }`}
    >
      <img
        src={session?.user?.image as string}
        className="h-11 w-11 rounded-full cursor-pointer"
      />
      <div className="w-full divide-y divide-gray-700">
        <div className={`${selectedFile && "pb-7"} ${input && "space-y-10"}`}>
          <textarea
            value={input}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setInput(e.target.value)
            }
            rows={1}
            ref={textAreaRef}
            placeholder="What's happening?"
            className="bg-transparent resize-none outline-none text-[#d9d9d9] text-lg placeholder-gray-500 tracking-wide w-full min-h-[50px] max-h-fit"
          />

          {selectedFile && (
            <div className="relative">
              <div
                className="absolute w-8 h-8 bg-[#15181c] hover:bg-[#272c26] bg-opacity-75 rounded-full flex items-center justify-center top-1 left-1 cursor-pointer"
                onClick={() => setSelectedFile(null)}
              >
                <XIcon className="text-white h-5" />
              </div>
              <img
                src={`${selectedFile}`}
                className="object-contain rounded-2xl max-h-80"
              />
            </div>
          )}
        </div>

        <div className="flex justify-between items-center pt-2.5">
          <div className="flex items-center">
            <div
              className="icon"
              onClick={() => filePickerRef.current?.click()}
            >
              <PhotographIcon className="h-[22px] text-[#1d9bf0]" />
              <input
                type="file"
                hidden
                ref={filePickerRef}
                onChange={addImageToPost}
              />
            </div>

            <div className="icon rotate-90">
              <ChartBarIcon className="h-[22px] text-[#1d9bf0]" />
            </div>

            <div className="icon" onClick={() => setShowEmojis(!showEmojis)}>
              <EmojiHappyIcon className="h-[22px] text-[#1d9bf0]" />
            </div>

            <div className="icon">
              <CalendarIcon className="h-[22px] text-[#1d9bf0]" />
            </div>
            {showEmojis && (
              <div className="absolute rounded-[20px] mt-[475px] ml-[-40] max-w-[320px]">
                <EmojiPicker
                  onEmojiClick={addEmoji}
                  lazyLoadEmojis
                  skinTonesDisabled
                  theme={Theme.DARK}
                />
              </div>
            )}
          </div>

          <button
            className="bg-[#1d9bf0] text-white rounded-full px-4 py-1.5 font-bold hover:bg-[#1a8cd8] disabled:hover:bg-[#1d9bf0] disabled:opacity-50 disabled:cursor-default"
            disabled={!input.trim() && !selectedFile}
            onClick={sendPost}
          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Input;
