import * as AT from './actionTypes'
import { BorrowActionTypes } from './types'
import { CoinType } from 'blockchain-wallet-v4/src/types'

export const createBorrow = () => ({
  type: AT.CREATE_BORROW
})

export const fetchBorrowOffers = () => ({
  type: AT.FETCH_BORROW_OFFERS
})

export const fetchBorrowOffersLoading = (): BorrowActionTypes => ({
  type: AT.FETCH_BORROW_OFFERS_LOADING
})

export const fetchBorrowOffersFailure = (error): BorrowActionTypes => ({
  type: AT.FETCH_BORROW_OFFERS_FAILURE,
  payload: {
    error
  }
})

export const fetchBorrowOffersSuccess = (offers): BorrowActionTypes => ({
  type: AT.FETCH_BORROW_OFFERS_SUCCESS,
  payload: {
    offers
  }
})

export const fetchUserBorrowHistory = () => ({
  type: AT.FETCH_USER_BORROW_HISTORY
})

export const fetchUserBorrowHistoryLoading = (): BorrowActionTypes => ({
  type: AT.FETCH_USER_BORROW_HISTORY_LOADING
})

export const fetchUserBorrowHistoryFailure = (error): BorrowActionTypes => ({
  type: AT.FETCH_USER_BORROW_HISTORY_FAILURE,
  payload: {
    error
  }
})

export const fetchUserBorrowHistorySuccess = (
  borrowHistory
): BorrowActionTypes => ({
  type: AT.FETCH_USER_BORROW_HISTORY_SUCCESS,
  payload: {
    borrowHistory
  }
})

export const handleMaxCollateralClick = () => ({
  type: AT.MAX_COLLATERAL_CLICK
})

export const initializeBorrow = (coin: CoinType) => ({
  type: AT.INITIALIZE_BORROW,
  payload: {
    coin
  }
})

export const setPaymentFailure = (
  error: string | Error
): BorrowActionTypes => ({
  type: AT.SET_PAYMENT_FAILURE,
  payload: {
    error
  }
})

export const setPaymentLoading = (): BorrowActionTypes => ({
  type: AT.SET_PAYMENT_LOADING
})

export const setPaymentSuccess = (payment): BorrowActionTypes => ({
  type: AT.SET_PAYMENT_SUCCESS,
  payload: {
    payment
  }
})