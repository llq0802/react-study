import React, { useState, useEffect } from 'react';
import {
  week,
  getMonthData,
  btnStyle,
  nowYear,
  nowMonth,
  Iprops,
  DateRet,
} from './util';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import styles from './index.scss';

/**
 * 自定义日历组件
 * @param {*} param0 
 * @returns 
 */
export default function Calender({
  handleClick,
  handleMouseEnter,
  onPanelChange,
  dateCellRender,
}) {
  // 记录上一个月
  const [lastMonth, setLastMonth] = useState < number > (0),
    // 当前年份
    [currentYear, setCurrentYear] = useState < number > (nowYear),
    // 当前月份
    [currentMonth, setCurrentMonth] = useState < number > (nowMonth),
    // 日历展示数据
    [monthList, setMonthList] = useState < any[] > ([]),
    // 鼠标移过日期
    [currentMouseHoverDate, setCurrentMouseHoverDate] = useState < any > (null);

  // 更新日历数据
  useEffect(() => {
    setMonthList(getMonthData(currentYear, currentMonth));
  }, [currentYear, currentMonth]);

  /**
   *  触发事件 点击事件｜鼠标移入事件｜面板改变事件
   * @param param 日期
   * @param type 类型 1、点击 2、鼠标移入
   */
  function onClick({ year, month, showDate: date }, type) {
    const data = { year, month, date };
    if (type === 1) {
      if (lastMonth !== 0 && lastMonth !== month) {
        // 面板改变时触发
        handlePanelChange(data)
      }
      setLastMonth(month);
      handleClick && handleClick(data);
    } else {
      handleMouseEnter && handleMouseEnter(data);
    }
  }

  // 下一月
  function handleNextMonth() {
    const month = currentMonth + 1;
    if (month >= 13) {
      const year = currentYear + 1;
      setCurrentYear(year);
      setCurrentMonth(1);
      // 面板改变时触发
      const data = {
        year,
        month: 1,
        date: 1,
      };
      handlePanelChange(data);
    } else {
      setCurrentMonth(month);
      // 面板改变时触发
      const data = {
        year: currentYear,
        month,
        date: 1,
      };
      handlePanelChange(data);
    }
  }

  /**
   * 查看上一个月
   */
  function handlePrevMonth() {
    const month = currentMonth - 1;
    if (month <= 0) {
      const year = currentYear - 1;
      setCurrentYear(year);
      setCurrentMonth(12);
      // 面板改变时触发
      const data = {
        year,
        month: 12,
        date: 1,
      };
      handlePanelChange(data);
    } else {
      setCurrentMonth(month);
      // 面板改变时触发
      const data = {
        year: currentYear,
        month,
        date: 1,
      };
      handlePanelChange(data);
    }
  }

  /**
   * 面板修改
   */
  function handlePanelChange(data: DateRet) {
    onPanelChange && onPanelChange(data);
  }

  // 当前时间
  function handleSetTimeNow() {
    setCurrentYear(currentYear);
    setCurrentMonth(currentMonth);
  }

  return (
    <div className={styles.calenderContainer}>
      {/* 日历头部 */}
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <Button
            className={styles.headerLeftBtn}
            size="small"
            onClick={handleSetTimeNow}
          >
            今天
          </Button>
        </div>
        <div className={styles.headerMain}>
          <LeftOutlined style={btnStyle} onClick={handlePrevMonth} />
          <div>
            {currentYear}年{currentMonth}月
          </div>
          <RightOutlined style={btnStyle} onClick={handleNextMonth} />
        </div>
        <div className={styles.headerRight}></div>
      </div>
      {/* 日历主题 */}
      <div className={styles.main}>
        <div className={styles.week}>
          {week.map((it) => {
            return (
              <div key={it} className={styles.weekCell}>
                {it}
              </div>
            );
          })}
        </div>
        <div className={styles.date}>
          {monthList.map((date, i) => {
            return (
              <div
                className={styles.dateCell}
                key={i}
                onClick={() => onClick(date, 1)}
                onMouseEnter={() => onClick(date, 0)}
                style={{
                  background: currentMonth === date.month ? '#fff' : '#fafafa',
                }}
              >
                <div
                  className={styles.dateCellHeader}
                  style={{
                    color:
                      currentMonth === date.month
                        ? 'rgba(0,0,0,.85)'
                        : 'rgba(0,0,0,.3)',
                  }}
                >
                  {date.showDate}
                </div>
                <div className={styles.dateCellMain}>
                  {dateCellRender && dateCellRender(date)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
