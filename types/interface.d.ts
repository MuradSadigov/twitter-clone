interface ISidebarLinkProps {
    Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
    text: string;
    active?: boolean;
}


export default ISidebarLinkProps;