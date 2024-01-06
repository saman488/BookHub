export const Heros = () => {

    return (
        <div>
            <div className='d-none d-lg-block'>
                <div className='row g-0 mt-5'>
                    <div className=' col-sm-6 col-md-6'>
                        <div className='col-image-left'></div>
                    </div>

                    <div className='col-4 col-md-4 container d-flex justify-content-center align-item-center'>
                        <div className='ml-2'>
                            <h1>What have you been reading?</h1>
                            <p className='lead'>
                                Share your latest reads with us! Whether it's learning a new skill or diving into a favorite topic, we're here to provide top-notch content tailored just for you. Let's embark on a reading journey together!
                            </p>
                            <a className=' btn main-color btn-lg text-white' href='#'>Sign up</a>
                        </div>
                    </div>
                </div>
                <div className='row g-0'>
                    <div className='col-4 col-md-4 container d-flex justify-content-center align-items-center'>
                        <div className='ml-2'>
                            <h1>Our collection is always changing!</h1>
                            <p className='lead'>
                                We're dedicated to keeping our collection dynamic and tailored to the ever-changing interests of our 'luve 2 Read' students. With diligence, we curate a diverse and engaging collection, making books our top priority. Stay tuned for the latest additions as we enhance your reading experience!
                            </p>
                        </div>
                    </div>
                    <div className='col-sm-6 col-md-6'>
                        <div className='col-image-right'></div>

                    </div>
                </div>
            </div>
            {/* Mobile Heros */}
            <div className='d-lg-none'>
                <div className='container'>
                    <div className='m-2'>
                        <div className='col-image-left'></div>
                        <div className='mt-2'>
                            <h1>What have you been reading</h1>
                            <p className='lead'>
                                Share your latest reads with us! Whether it's learning a new skill or diving into a favorite topic, we're here to provide top-notch content tailored just for you. Let's embark on a reading journey together!
                            </p>
                            <a className=' btn main-color btn-lg text-white' href='#'>Sign up</a>
                        </div>
                    </div>
                    <div className='m-2'>
                        <div className='col-image-right'></div>
                        <div className='mt-2'>
                            <h1>Our collection is always changing!</h1>
                            <p className='lead'>
                                We're dedicated to keeping our collection dynamic and tailored to the ever-changing interests of our 'luve 2 Read' students. With diligence, we curate a diverse and engaging collection, making books our top priority. Stay tuned for the latest additions as we enhance your reading experience!
                            </p>


                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}