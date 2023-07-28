import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Blogs from './Blogs'
import Pagination from './Pagination'
import Spinner from './Spinner'

const Template = () => {

    const {loading} = useContext(AppContext);

    
    return (
        <div className='w-full'>
            {
                loading ?
                    (<Spinner />) :
                    (<div>
                        <Blogs />
                        <Pagination />
                    </div>)
            }
        </div>
    )
}

export default Template