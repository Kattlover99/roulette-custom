import styled from "styled-components";

export const Container = styled.div`
    margin: auto;
    text-align: center;
`

export const SpinWrapper = styled.div`
    position: relative;
    margin-bottom: 2rem;
    background: #999;
    height: 400px;
    overflow: hidden;
`

export const BorderLine = styled.span`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    width: 7px;
    height: 100%;

    & span {
        position: absolute;
        top: 0;
        left: 2px;
        width: 3px;
        height: 100%;
        background: #000;
    }

    &:before, &:after {
        position: absolute;
        left: -2px;
        width: 9px;
        height: 10%;
        background: #000;
        content: '';
    }

    &:before {
        top: 0;
    }

    &:after {
        bottom: 0;
    }
`

export const WheelContainer = styled.div`
    position: relative;
    width: 1224px;
    height: 1224px;
    margin: auto;
`

export const WheelItem = styled.div<{transaction: string, transition: string}>`
    position: absolute;
    inset: 0;
    transform: ${props => props.transaction};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 173px;
    height: 200px;
    margin: 512px;
    transition: ${props => props.transition}
`

export const Search = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    width: 40px;
    height: 40px;
    background: #000;
    transition: all ease-in .3s;
`

export const WheelItemContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background: radial-gradient(300% 230% at 50% 230%, #ffffff00 60%, #ffffff 60%, #ffffff 100%, #ffffff00 100%);
    clip-path: polygon(0 0, 100% 0, 82% 100%, 18% 100%);

    &:hover ${Search} {
        opacity: 1;
    }
`

export const WheelItemContent = styled.div`
    position: absolute;
    top: 6px;
    left: 5px;
    display: flex;
    align-items: center;
    padding: 0 2rem;
    justify-content: center;
    width: calc(100% - 10px);
    height: calc(100% - 12px);
    background: radial-gradient(300% 230% at 50% 230%, #C5D7E200 60%, #C5D7E2 60%, #C5D7E2 100%, #C5D7E200 100%);
    clip-path: polygon(0 0, 100% 0, 82% 100%, 18% 100%);
`

export const InfoIcon = styled.div`
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, 0);
    width: 15px;
    height: 15px;
    border-radius: 5px 0 5px 0;
    border: 4px solid #3D789D;
`

export const Image = styled.img`
    width: 100%;
    height: auto;
`

export const Button = styled.button`
    padding: 0.7rem 1.5rem;
    background: none;
    font-size: 1rem;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 900;
    color: #3d789d;
    border: none;
    outline: none;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }

    &:disabled {
        opacity: .3;
    }
`
