// use local storage to manage cart data
const addDurationToDb= duration =>{
    const totalDuration = localStorage.setItem("duration",duration);
 
    console.log(duration)
}

const addSecondsToDb= second =>{
    const seconds = localStorage.setItem("seconds",second);

}



export {addDurationToDb, addSecondsToDb};
// export {addDurationToDb};
