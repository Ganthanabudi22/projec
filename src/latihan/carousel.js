    import React, { Component } from 'react';
    import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    } from 'reactstrap';

    const items = [
    {
        src: 'https://i.pinimg.com/736x/50/4c/e2/504ce2040098a45c1704dccc03ded8f8--light-machine-gun-machine-guns.jpg',
        altText: 'MaretMantap',
        caption: 'MaretMantap'
    },
    {
        src: 'https://img2.cgtrader.com/items/889140/b3b433b27e/large/pbr-assault-rifle-hk416-game-ready-3d-model-low-poly-obj-3ds-fbx-stl-blend-dae.jpg',
        altText: 'MaretMantap',
        caption: 'MaretMantap'
    },
    {
        src: 'https://www.3dartistonline.com/users/3757/thm1024/1326635680_gun.jpg',
        altText: 'MaretMantap',
        caption: 'MaretMantap'
    }
    ];

    class CarouselKu extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    render() {
        const { activeIndex } = this.state;

        const slides = items.map((item) => {
        return (
            <CarouselItem
            onExiting={this.onExiting}
            onExited={this.onExited}
            key={item.src}
            >
            <img src={item.src} alt={item.altText} height='200px' width='820' />
            {/* <CarouselCaption captionText={item.caption} captionHeader={item.caption} /> */}
            </CarouselItem>
        );
        });

        return (
        <Carousel
            activeIndex={activeIndex}
            next={this.next}
            previous={this.previous}
        >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
        );
    }
    }


    export default CarouselKu;