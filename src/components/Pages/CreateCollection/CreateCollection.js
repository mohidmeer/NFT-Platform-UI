import React, {useState} from 'react'
import Background from './Background'
import Collection from './Collection'
import Detail from './Detail'
import Hashlist from './Hashlist'
import Intro from './Intro'
import Kyc from './Kyc'
import Launch from './Launch'
import ProgressBar from './ProgressBar'
import Socials from './Socials'

const CreateCollection = ({title = "List Your Collection "}) => {
  const [page, setPage] = useState(1);
  const [values, setValues] = useState({})

  const PageDisplay = () => {
    if (page === 1) {
      return <Intro stateChanger={setPage} setValues={setValues} values={values} />;
    } else if (page === 2) {
      return <Collection stateChanger={setPage} setValues={setValues} values={values} />;
    } else if (page === 3) {
      return <Detail stateChanger={setPage} setValues={setValues} values={values} />;
    } else if (page === 4) {
      return <Socials stateChanger={setPage} setValues={setValues} values={values} />;
    }
    else if (page === 5) {
      return <Background stateChanger={setPage} setValues={setValues} values={values} />;
    }
    else if (page === 6) {
      return <Launch stateChanger={setPage} setValues={setValues} values={values} />;
    }


  }
  return (
    <div className='mt-8 md:p-10 '>
      <h2 className='font-bold text-3xl'>{title}</h2>
      <ProgressBar stateChanger={setPage} page={page} />
      {PageDisplay()}
    </div>
  )
}

export default CreateCollection
