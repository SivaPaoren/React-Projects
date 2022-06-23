import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Prizes } from './Prizes';

export default function Card() {

  const baseURL = 'https://lotto.api.rayriffy.com/latest';
  const [lotteries, setLotteries] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then(
      (res) => {
        console.log(res.data.response);
        setLotteries(res.data.response);
      })
  }, []);


  return (
    <div class="container bg-light">
      <div class="row">
        <div class="col-4">
          <div className='my-4 fw-bold box'>
            <p className='f6-5 box'>First Prize</p>
            <p class="fs-1 bg-light  box">First Prize</p>
          </div>
        </div>
        <div class="col">
          <div className='my-4 fw-bold text-center box fontColor'>
            <p className='fs-5 box'>First Prize</p>
            <p class="fs-5 bg-light numbers">
              <span className='numbers'>First Prize</span>
              <span className='numbers'>First Prize</span>
            </p>
          </div>
        </div>
        <div class="col">
          <div className='my-4 fw-bold text-center box fontColor'>
            <p className='fs-5 box'>First Prize</p>
            <p class="fs-5 bg-light numbers">
              <span className='numbers'>First Prize</span>
              <span className='numbers'>First Prize</span>
            </p>
          </div>
        </div>
        <div class="col">
          <div className='my-4 fw-bold text-center box fontColor'>
            <p className='fs-5 box'>First Prize</p>
            <p class="fs-5 bg-light numbers">
              <span className='numbers'>First Prize</span>
              <span className='numbers'>First Prize</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

