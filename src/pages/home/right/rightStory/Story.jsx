import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

const Story = () => {
    return (
        <>
            <div className='py-3'>Stories</div>
            <div className=''>
                <Swiper className='flex gap-1'
                    spaceBetween={10}
                    slidesPerView={2}
                    autoplay={{
                        delay: 2500
                    }}
                    onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide className='p-1'>
                        <div className="h-52 bg-cover rounded-md" style={{
                            backgroundImage: "url('https://cdn.pixabay.com/photo/2024/02/15/15/46/cat-8575641_1280.jpg')"
                        }}>
                            <div className='h-14 w-14 rounded-full bg-cover object-cover'>
                                <img className='rounded-full p-2' src="https://scontent.fdac157-1.fna.fbcdn.net/v/t39.30808-1/439426752_1114499739876223_724619995359030685_n.jpg?stp=c0.142.480.480a_dst-jpg_p480x480&_nc_cat=105&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEhex-IEYxGE_1WrHy24hfrp1IdgCY4OOqnUh2AJjg46gT4cUwbUAW6aR0zK0L9sIgfUNER1aPaWCGBug2Xwtnr&_nc_ohc=mPN8TwN7TpIQ7kNvgH7EsEj&_nc_ht=scontent.fdac157-1.fna&oh=00_AYDlWsvFgRkgaaQQWFtudC5FxzY4j1v68XHVNrsRaa3Wjw&oe=6694CA8C" alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='p-1'>
                        <div className="h-52 bg-cover rounded-md" style={{
                            backgroundImage: "url('https://cdn.pixabay.com/photo/2024/02/15/15/46/cat-8575641_1280.jpg')"
                        }}>
                            <div className='h-14 w-14 rounded-full bg-cover object-cover'>
                                <img className='rounded-full p-2' src="https://scontent.fdac157-1.fna.fbcdn.net/v/t39.30808-1/439426752_1114499739876223_724619995359030685_n.jpg?stp=c0.142.480.480a_dst-jpg_p480x480&_nc_cat=105&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEhex-IEYxGE_1WrHy24hfrp1IdgCY4OOqnUh2AJjg46gT4cUwbUAW6aR0zK0L9sIgfUNER1aPaWCGBug2Xwtnr&_nc_ohc=mPN8TwN7TpIQ7kNvgH7EsEj&_nc_ht=scontent.fdac157-1.fna&oh=00_AYDlWsvFgRkgaaQQWFtudC5FxzY4j1v68XHVNrsRaa3Wjw&oe=6694CA8C" alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='p-1'>
                        <div className="h-52 bg-cover rounded-md" style={{
                            backgroundImage: "url('https://cdn.pixabay.com/photo/2024/02/15/15/46/cat-8575641_1280.jpg')"
                        }}>
                            <div className='h-14 w-14 rounded-full bg-cover object-cover'>
                                <img className='rounded-full p-2' src="https://scontent.fdac157-1.fna.fbcdn.net/v/t39.30808-1/439426752_1114499739876223_724619995359030685_n.jpg?stp=c0.142.480.480a_dst-jpg_p480x480&_nc_cat=105&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEhex-IEYxGE_1WrHy24hfrp1IdgCY4OOqnUh2AJjg46gT4cUwbUAW6aR0zK0L9sIgfUNER1aPaWCGBug2Xwtnr&_nc_ohc=mPN8TwN7TpIQ7kNvgH7EsEj&_nc_ht=scontent.fdac157-1.fna&oh=00_AYDlWsvFgRkgaaQQWFtudC5FxzY4j1v68XHVNrsRaa3Wjw&oe=6694CA8C" alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='p-1'>
                        <div className="h-52 bg-cover rounded-md" style={{
                            backgroundImage: "url('https://cdn.pixabay.com/photo/2024/02/15/15/46/cat-8575641_1280.jpg')"
                        }}>
                            <div className='h-14 w-14 rounded-full bg-cover object-cover'>
                                <img className='rounded-full p-2' src="https://scontent.fdac157-1.fna.fbcdn.net/v/t39.30808-1/439426752_1114499739876223_724619995359030685_n.jpg?stp=c0.142.480.480a_dst-jpg_p480x480&_nc_cat=105&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEhex-IEYxGE_1WrHy24hfrp1IdgCY4OOqnUh2AJjg46gT4cUwbUAW6aR0zK0L9sIgfUNER1aPaWCGBug2Xwtnr&_nc_ohc=mPN8TwN7TpIQ7kNvgH7EsEj&_nc_ht=scontent.fdac157-1.fna&oh=00_AYDlWsvFgRkgaaQQWFtudC5FxzY4j1v68XHVNrsRaa3Wjw&oe=6694CA8C" alt="" />
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </>
    )
}

export default Story