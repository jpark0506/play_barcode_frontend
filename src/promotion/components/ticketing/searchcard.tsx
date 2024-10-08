import React from 'react'
import calendar_icon from '../../../main/img/calendar_icon.png';
import location_icon from '../../../main/img/location_icon.png';
import checker_img from '../../../main/img/checker_img.png';
import { PromotionCard } from '../../../promotion/types/common';
import { convertStringToDate } from '../../../utils/time';

type Props = {
  result: PromotionCard,
  isLoading : boolean
}

const SearchCard : React.FC<Props> = (props: Props) => {
  const WEEKDAY = ['일', '월', '화', '수', '목', '금', '토'];
  const {
    promotionId,
    title,
    team,
    thumbnail,
    date,
    location,
    startTime,
    endTime,
    entranceFee,
    writer: {name: writer_name, nickname: writer_nickname, profileImg: writer_profileImg},
  } = props.result
  
  const {isLoading} = props;
  
  return (
    <div className="relative min-w-full mx-auto overflow-hidden bg-white rounded-lg shadow-md min-h-1/4">
      <div className="relative">
        <div className="flex items-center justify-center w-full h-40">
          <img src={thumbnail === '' ? checker_img : thumbnail} alt="checker" className="object-cover w-full h-full" />
        </div>
        {/* <LikeButton like={true} like_num={1}/> */}
      </div>
      <div className="pt-2 px-10px">
        <p className="text-pxs text-text-plain">{team}</p>
        <p className="text-plg text-text-plain">{title}</p>
      </div>
      <div className="">
        <div className='flex flex-row items-center w-full'>
          <div className="w-2 h-4 bg-gray-4" style={{ borderRadius: '0 16px 16px 0' }}></div>
          <div className="w-full border-t border-dashed border-gray-4"></div>
          <div className="w-2 h-4 bg-gray-4" style={{ borderRadius: '16px 0 0 16px' }}></div>
        </div>
      </div>
      <div className="pb-2 px-10px">
          <div className="flex items-center justify-between">
            <div className="flex flex-row items-center">
              <img src={location_icon} alt="calendar" className="w-4 h-4 mr-1"/>
              <div className="text-text-plain text-pxs">{location}</div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center">
              <img src={calendar_icon} alt="calendar" className="w-4 h-4 mr-1"/>
              <div className="text-text-plain text-pxs">{date}</div>
              <div>&nbsp;</div>
              <div className="text-text-plain text-pxs">{WEEKDAY[new Date(date).getDay()]}</div>
              <div>&nbsp;</div>
              <div className="text-text-plain text-pxs">{`${convertStringToDate(startTime)}~`}</div>
              <div className="text-text-plain text-pxs">{convertStringToDate(endTime)}</div>
            </div>
            <div className="text-plg text-primary">{`${entranceFee}₩`}</div>
          </div>
        </div>
      </div>
  )
}

export default SearchCard