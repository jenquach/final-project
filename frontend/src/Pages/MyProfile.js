import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

import { API_URL } from "../utils/urls"
import profile from "../reducers/profile"

import styled from "styled-components"

const Wrapper = styled.div`
	height: 100vh;
	margin-top: 68px;
	padding: 10px;
`
const ContainerWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 2fr;
`
const Container = styled.div`
	ul{
		padding: 10px;
	},
	li{
		list-style-type: none;
	}
`
const ContentContainer = styled.div`
	display: flex;
	justify-content: center;
	border: 1px solid;
`



const MyProfile = () => {
	const [selected, setSelected] = useState(0)
	const message = useSelector((store) => store.profile.message)
	const accessToken = useSelector((store) => store.user.accessToken)
	const dispatch = useDispatch()
	const navigate = useNavigate()

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
						<li><a onClick={() => setSelected(0)}>Book a pick-up</a></li>
						<li><a onClick={() => setSelected(1)}>Order history</a></li>
						<li><a onClick={() => setSelected(2)}>Account settings</a></li>
					</ul>
				</Container>
					<ContentContainer>
						{(selected === 0) && <div>Book a pickup</div>}
            {(selected === 1) && <div>Edit profile</div>}
            {(selected === 2) && <div> Order history</div>}
					</ContentContainer>
    	</ContainerWrapper>
		</Wrapper>
	)
}

export default MyProfile