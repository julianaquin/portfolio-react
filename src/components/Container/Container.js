import React from "react";
import * as S from './Container.styles';

const Container = ({children}) =>{
    return <S.ContianerContent>
        {children}
    </S.ContianerContent>
}

export default Container;