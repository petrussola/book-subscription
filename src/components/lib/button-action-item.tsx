import * as React from "react";

interface externalLinkProps {
  target: string;
  rel: string;
}

interface ButtonActionItemProps {
  children: string;
  link?: string;
  waitingListProps?: externalLinkProps;
}

export const ButtonActionItem = ({
  children,
  link,
  waitingListProps,
}: ButtonActionItemProps) => {
  return (
    <a href={link} {...waitingListProps}>
      {children}
    </a>
  );
};
