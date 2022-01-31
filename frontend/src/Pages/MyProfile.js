import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

import { API_URL } from "../utils/urls"
import profile from "../reducers/profile"

import styled from "styled-components"

const Wrapper = styled.div`
	height: 100vh;
	margin-top: 68px;
`
const ContainerWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 2fr;
`
const Container = styled.div`
	li{
		list-style-type: none;
	}
`
const ContentContainer = styled.div`
	margin-top: 68px;
`



const MyProfile = () => {
	const [Pickup, setPickup] = useState(false)
	const [Orders, setOrders] = useState(false)
	const [Settings, setSettings] = useState(false)
	const text1 = 'lalala'
	const text2 = 'blalala'
	const text3 = 'hahaha'
	const message = useSelector((store) => store.profile.message)
	const accessToken = useSelector((store) => store.user.accessToken)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const togglePickup = () => {
		setPickup(true)
		setOrders(false)
		setSettings(false)
	}

	const toggleOrders = () => {
		setPickup(false)
		setOrders(true)
		setSettings(false)
	}

	const toggleSettings = () => {
		setPickup(false)
		setOrders(false)
		setSettings(true)
	}

	useEffect(() => {
		if (!accessToken) {
			navigate('/signin')
		}
	}, [accessToken, navigate])

	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {
				Authorization: accessToken,
			},
		}

		fetch(API_URL('my-profile'), options)
			.then((res) => res.text())
			.then((data) => {
				dispatch(profile.actions.setMessage(data.response))
				dispatch(profile.actions.setError(null))
			})
	}, [accessToken, dispatch])


	return (
    <Wrapper>
			<h1>Welcome &#x1F44B; {message}</h1>
    <ContainerWrapper>
				<Container>
					<ul>
						<li><a onClick={() => togglePickup()}>Book a pick-up</a></li>
						<li><a onClick={() => toggleOrders()}>Order history</a></li>
						<li><a onClick={() => toggleSettings()}>Account settings</a></li>
					</ul>
				</Container>
					<ContentContainer>
				
							<div>
							<h6>
							{Pickup ? text1 : null}
							</h6>
							<h6>
							{Orders ? text2 : null}
							</h6>
							<h6>
							{Settings ? text3 : null}
							</h6>
							</div>
				
					</ContentContainer>
	
    </ContainerWrapper>
			</Wrapper>
	
	)
}

export default MyProfile