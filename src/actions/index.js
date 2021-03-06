import * as ActionTypes from './actionTypes'

export const changeFalseModalPlaces = () =>{
  return {
    type:'FALSE_MODAL_PLACE',
  }
}

export const changeTrueModalPlaces = () =>{
  return {
    type:'TRUE_MODAL_PLACE',
  }
}

export const inputTitleMeetUp = (title) =>{
  return {
    type: 'INPUT_TITLE_MEETUP',
    payload:title,
  }
}

export const inputDescriptionMeetUp = (description) =>{
  return {
    type: 'INPUT_DESCRIPTION_MEETUP',
    payload:description,
  }
}

export const inputDateMeetUp = (date) =>{
  return {
    type: 'INPUT_DATE_MEETUP',
    payload:date,
  }
}

export const chooseMeetPlace = (place) =>{
  return {
    type:'CHANGE_PLACE',
    payload:place,
  }
}

export const inputDateDeadlineMeetUp = (date) =>{
  return {
    type: 'INPUT_DATE_DEADLINE_MEETUP',
    payload:date,
  }
}

export const getAllMeetUps = (data) =>{
  return {
    type: 'GET_ALL_MEETUPS',
    payload:data,
  }
}

export const deleteMeetingsWhenLogOut = () =>{
  return {
    type: 'DELETE_MEETINGS_WHEN_LOGOUT',
  }
}



export const getCurrentLocation = () => {
  return (dispatch) => {
    navigator.geolocation.watchPosition(position => {
      let sendPosition = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        error: null,
      }
      dispatch({
        type: ActionTypes.GET_CURRENT_LOCATION,
        payload: sendPosition,
      })
    }
      //,
      //(error) => {
      //  let sendPosition = {
      //    latitude: 0,
      //    longitude: 0,
      //    error,
      //  }
      //  dispatch({
      //    type: ActionTypes.GET_CURRENT_LOCATION,
      //    payload: sendPosition
      //  })
      //}, { enableHighAccuracy: true, timeout: 20000, maximumAge: 10000}
    )
  }
}
