import React from "react";
import { BorderLine, Button, Container, Image, InfoIcon, Search, SpinWrapper, WheelContainer, WheelItem, WheelItemContainer, WheelItemContent } from "./style";

import Icon from "components/icon";

interface ItemProps {
    color: string
    img: string
}

const items:ItemProps[] = [
    { color: '#C5D7E2', img: '1.webp' },
    { color: '#C5D7E2', img: '2.webp' },
    { color: '#C5D7E2', img: '3.webp' },
    { color: '#C5D7E2', img: '2.webp' },
    { color: '#C5D7E2', img: '1.webp' },
    { color: '#C5D7E2', img: '2.webp' },
    { color: '#C5D7E2', img: '2.webp' },
    { color: '#C5D7E2', img: '1.webp' },
    { color: '#C5D7E2', img: '2.webp' },
    { color: '#C5D7E2', img: '4.webp' },
    { color: '#C5D7E2', img: '1.webp' },
    { color: '#C5D7E2', img: '2.webp' },
    { color: '#C5D7E2', img: '2.webp' },
    { color: '#C5D7E2', img: '2.webp' },
    { color: '#C5D7E2', img: '5.webp' },
    { color: '#C5D7E2', img: '2.webp' },
    { color: '#C5D7E2', img: '1.webp' },
    { color: '#C5D7E2', img: '1.webp' },
    { color: '#C5D7E2', img: '2.webp' },
    { color: '#C5D7E2', img: '6.webp' },
    { color: '#C5D7E2', img: '1.webp' },
    { color: '#C5D7E2', img: '2.webp' },
    { color: '#C5D7E2', img: '2.webp' },
    { color: '#C5D7E2', img: '7.webp' },
    { color: '#C5D7E2', img: '2.webp' },
    { color: '#C5D7E2', img: '2.webp' },
    { color: '#C5D7E2', img: '1.webp' },
    { color: '#C5D7E2', img: '8.webp' },
    { color: '#C5D7E2', img: '2.webp' },
    { color: '#C5D7E2', img: '9.webp' },
]

const getRandomData = () => {
    let data = [...items];
    for (let i=0; i<data.length; i++) {
        const temp = data[i];
        const rn = Math.floor(data.length * Math.random());
        data[i] = data[rn];
        data[rn] = temp;
    }

    return data.slice(0, 20)
}

const Spin = () => {
    const [deg, setDeg] = React.useState<number>(0);
    const [transition, setTransiion] = React.useState<string>('all ease-in .5s');
    const [showData, setShowData] = React.useState<ItemProps[]>(getRandomData());
    const ButtonRef = React.useRef<any>(null);

    const spin = async () => {
        setTimeout(() => setShowData(getRandomData()), 800);
        if (ButtonRef.current) {
            setTransiion('all ease-in .5s');
            ButtonRef.current.disabled = true;
            setDeg(deg - 50);
            await setTimeout(forward, 500)
        }
    }

    const forward = async () => {
        setTransiion('all ease-in-out 3s');
        setDeg(deg + 360 * 4 + Math.random() * 360);
        await setTimeout(() => {}, 500)
        ButtonRef.current.disabled = false;
    }

    return (
        <Container onClick={spin}>
            <SpinWrapper>
                <WheelContainer>
                    {showData.map((item:ItemProps, key:number) => (
                        <WheelItem 
                            transaction = {`rotate(${18 * key + deg}deg) translate3d(-440px, 0, 0) rotate(-90deg)`}
                            transition = {transition}
                        >
                            <WheelItemContainer>
                                <WheelItemContent>
                                    <InfoIcon>
                                        <span></span>
                                    </InfoIcon>
                                    <Image src={`/products/${item.img}`} />
                                    <Search>
                                        <Icon icon="Search" />
                                    </Search>
                                </WheelItemContent>
                            </WheelItemContainer>
                        </WheelItem>
                    ))}
                </WheelContainer>
                <BorderLine><span /></BorderLine>
            </SpinWrapper>
            <Button ref={ButtonRef} onClick={spin}>Try for free</Button>
        </Container>
    )
}

export default Spin;