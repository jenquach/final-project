import React from "react"
import styled, { keyframes } from "styled-components"

const LoadingOverlay = styled.div`
  position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background: #000;
	display: flex;
	justify-content: center;
	align-items: center;
`
const spinner = keyframes`
  0% {
		transform: rotate(0);
	}
	50% {
		transform: rotate(180deg);
	}
	100% {
		transform: rotate(360deg);
	}
`

const LoadingSpinner = styled.div`
  width: 80px;
	height: 80px;
	border: 8px solid #e60073;
	border-radius: 50%;
	border-left: 5px solid #ff4da6;

	animation: ${spinner} infinite 0.5s;
`

export const Loader = () => {

  return (
    <LoadingOverlay>
			<LoadingSpinner />
		</LoadingOverlay>
  )
}

export default Loader