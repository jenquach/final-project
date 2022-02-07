import React from "react"
import styled, { keyframes } from "styled-components"

const LoadingOverlay = styled.div`
  height: 100vh;
  background: #f0f0f0;  
  position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
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
  width: 40px;
	height: 40px;
	border: 8px solid grey;
	border-radius: 50%;
	border-left: 5px solid lightgrey;

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