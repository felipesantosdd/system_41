import React from 'react';
import { BodyProps } from '../../interfaces/interfaces';
import { BodyStyled } from "./body.styled";

export const BodyComponent: React.FC<BodyProps> = ({ children }) => {
    return <BodyStyled>{children}</BodyStyled>;
};
