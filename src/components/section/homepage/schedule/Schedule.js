"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Schedule.module.css";

export default function Schedule() {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const times = ["7 AM", "12 PM", "1 PM"];

  const sessions = {
    "7 AM": Array(7).fill({ label: "Yoga (All Levels)", color: "#D7DEBF" }),
    "12 PM": Array(7).fill({ label: "Sound Healing", color: "#CED5CE" }),
    "1 PM": Array(7).fill(null),
  };

  return (
    <div className={styles.scheduleWrapper}>
      <header className={styles.scheduleHeader}>
        <h2 className={styles.heading}>Weekly Schedule</h2>
        <p className={styles.headingText}>Advanced Booking Is Recommended</p>
      </header>
      <div className={styles.scheduleGridWrapper}>
        <div className={styles.scheduleGrid}>
          <div className={styles.stickyColumn}></div>
          {days.map((day, idx) => (
            <div key={idx} className={styles.dayCell}>
              {day}
            </div>
          ))}

          {times.map((time, tIdx) => (
            <div key={tIdx} className={styles.timeRow}>
              <div className={styles.timeCell}>{time}</div>
              {sessions[time].map((session, sIdx) => (
                <div key={sIdx} className={styles.sessionCell}>
                  {session && (
                    <h4
                      className={styles.session}
                      style={{ backgroundColor: session.color }}
                    >
                      {session.label}
                    </h4>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
