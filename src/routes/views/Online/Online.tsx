// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import  DraftEditor from '../../../components/draftjs/DraftEditor'

// import moment from 'moment-timezone';
// import {useState} from "react";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ReactPlayer from "react-player";

export const Online = () => {


	return (
		<>
			<main className='mt-[70px]'>
				<section className=' h-full grid grid-cols-1 md:grid-cols-4  mx-auto  md:gap-5 overflow-hidden'>
				<div className='left  h-[80%]  col-span-3'>
                    <div className='left md:px-10 h-[500px]'>
                        <ReactPlayer
                            url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                            width={'100%'}
                            height={'100%'}
                            controls={true}

                        />
                    </div>

                    <div className='bottom countdown py-5 bg-blue-950 h-full px-5'>
                        <h1 className='text-white text-xl font-bold'>Next Service Comes up in </h1>
                        <p className='text-white '> CountDown Ticking </p>
                    </div>
				</div>


				<div className='right mt-20 md:mt-0'>
                    <div className='px-5 bg-gray-100 '>

                        <div>

                            <Tabs >

                                {/*First Editor */}
                                <TabPanel className=' md:h-[70vh] py-5 mb-[50px]'>
                                    <DraftEditor />
                                </TabPanel>

                                {/*Second Editor */}
                                <TabPanel className='py-5 mb-[50px]'>
                                    <h2>Any content 2</h2>
                                </TabPanel>

                                <TabList className='flex space-x-4 py-2  font-light'>
                                    <Tab className=' px-3 py-2  focus:bg-white'>NOTES</Tab>
                                    <Tab className=' px-3 py-2 focus:bg-white'>BIBLE</Tab>
                                </TabList>
                            </Tabs>
                        </div>
                    </div>
				</div>
				</section>
			</main>
		</>
	)
}