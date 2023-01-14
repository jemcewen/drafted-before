const Pagination = ({
  athletesPerPage,
  totalAthletes,
  nextPage,
  previousPage,
  indexOfFirstAthlete,
  indexOfLastAthlete,
}) => {
  if (totalAthletes > athletesPerPage) {
    return (
      <div className='flex flex-col items-center'>
        <span className='text-sm'>
          Showing{' '}
          <span className='font-semibold '>{indexOfFirstAthlete + 1}</span> to{' '}
          <span className='font-semibold '>
            {totalAthletes < indexOfLastAthlete + 1
              ? totalAthletes
              : indexOfLastAthlete}
          </span>{' '}
          of <span className='font-semibold'>{totalAthletes}</span> Athletes
        </span>
        <div className='inline-flex mt-2 xs:mt-0'>
          <button
            disabled={indexOfFirstAthlete - athletesPerPage < 0}
            onClick={previousPage}
            className='inline-flex items-center px-4 py-2 text-sm font-medium rounded-l text-base-content bg-gray-200  hover:bg-gray-300 border-white'
          >
            <svg
              aria-hidden='true'
              className='w-5 h-5 mr-2'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z'
                clipRule='evenodd'
              ></path>
            </svg>
            Prev
          </button>
          <button
            disabled={indexOfFirstAthlete + athletesPerPage >= totalAthletes}
            onClick={nextPage}
            className='inline-flex items-center px-4 py-2 text-sm font-medium   border-0 border-l rounded-r text-base-content bg-gray-200  hover:bg-gray-300 border-white'
          >
            Next
            <svg
              aria-hidden='true'
              className='w-5 h-5 ml-2'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
                clipRule='evenodd'
              ></path>
            </svg>
          </button>
        </div>
      </div>
    );
  }
};

export default Pagination;
