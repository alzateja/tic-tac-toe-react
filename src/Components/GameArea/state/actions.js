import {
  LOAD_ADD_DRIVER_FORM,
  LOAD,
  ADD_DRIVER_FAILED,
  ADD_DRIVER_DETAILS_LOAD,
  ADD_DRIVER_DETAILS_LOADED,
  ADD_DRIVER_META_LOAD,
  ADD_DRIVER_META_LOADED,
  ADD_DRIVER_FIRST_NAME_CHANGE,
  ADD_DRIVER_MIDDLE_INITIAL_CHANGE,
  ADD_DRIVER_LAST_NAME_CHANGE,
  ADD_DRIVER_DRIVERS_LICENSE_STATE_CHANGE,
  ADD_DRIVER_BIRTHDATE_CHANGE,
  ADD_DRIVER_AGE_LICENSED_CHANGE,
  ADD_DRIVER_MARITAL_STATUS_CHANGE,
  ADD_DRIVER_EDUCATION_CHANGE,
  ADD_DRIVER_EMPLOYMENT_STATUS_CHANGE,
} from './constants'

export const loadAddDriverForm = (driversQuote) => ({
  type: LOAD_ADD_DRIVER_FORM,
  payload: driversQuote,
})

export const loadDriverDetails = (driversDetailsQuote) => ({
  type: ADD_DRIVER_DETAILS_LOADED,
  payload: driversDetailsQuote,
})

export const loadDriverMetaData = (driverMetaResponse) => ({
  type: ADD_DRIVER_META_LOADED,
  payload: driverMetaResponse,
})

export const loadAddDriver = () => ({
  type: LOAD,
})

export const failedAddDriver = (error) => ({
  type: ADD_DRIVER_FAILED,
  payload: error,
})

export const firstNameChanged = (data) => ({
  type: ADD_DRIVER_FIRST_NAME_CHANGE,
  payload: data,
})

export const middleInitialChanged = (data) => ({
  type: ADD_DRIVER_MIDDLE_INITIAL_CHANGE,
  payload: data,
})

export const lastNameChanged = (data) => ({
  type: ADD_DRIVER_LAST_NAME_CHANGE,
  payload: data,
})

export const driversLicenseStateChanged = (data) => ({
  type: ADD_DRIVER_DRIVERS_LICENSE_STATE_CHANGE,
  payload: data,
})

export const birthdateChanged = (name, data) => ({
  type: ADD_DRIVER_BIRTHDATE_CHANGE,
  payload: {
    key: name,
    data,
  },
})

export const ageLicensedChanged = (data) => ({
  type: ADD_DRIVER_AGE_LICENSED_CHANGE,
  payload: data,
})

export const maritalStatusChanged = (data) => ({
  type: ADD_DRIVER_MARITAL_STATUS_CHANGE,
  payload: data,
})

export const educationChanged = (data) => ({
  type: ADD_DRIVER_EDUCATION_CHANGE,
  payload: data,
})

export const employmentStatusChanged = (data) => ({
  type: ADD_DRIVER_EMPLOYMENT_STATUS_CHANGE,
  payload: data,
})

export const initDriverDetailsForm = () => ({
  type: ADD_DRIVER_DETAILS_LOAD,
})

export const initDriverMetaData = () => ({
  type: ADD_DRIVER_META_LOAD,
})


export const initAddDriverPage = (dispatch) => {
  dispatch(loadAddDriver())
}

export const initDriverDetails = (dispatch) => {
  dispatch(initDriverDetailsForm())
}

export const initDriverMetaPage = (dispatch) => {
  dispatch(initDriverMetaData())
}
