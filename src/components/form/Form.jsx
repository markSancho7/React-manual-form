import React, { useState } from 'react';
import {
	StyledBanner,
	StyledButton,
	StyledContainer,
	StyledContainerOfContainer,
	StyledDescription,
	StyledForm,
	StyledInput,
	StyledTitle,
	StyledTotalContainer
} from './styles';

const Form = () => {
	const [form, setForm] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: ''
	});

	const [errors, setErrors] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: ''
	});
	console.log(form);

	return (
		<StyledTotalContainer>
			<StyledContainerOfContainer>
				<StyledTitle>Learn to code by watching others</StyledTitle>
				<StyledDescription>
					See how experienced developers solve problems in real-time. Watching
					scripted tutorials is great, but understanding how developers think is
					invaluable.{' '}
				</StyledDescription>
			</StyledContainerOfContainer>
			<StyledContainerOfContainer>
				<StyledBanner>Try it free 7 days then $20/mo. thereafter</StyledBanner>
				<StyledForm
					onSubmit={() => {
						handleSubmit(form);
					}}
				>
					<StyledContainer>
						<StyledInput
							type='text'
							id='firstName'
							name='firstName'
							placeholder='First Name'
							onChange={e => handleChange(e, form, setForm, setErrors)}
						/>
						<p>{errors.firstName}</p>
					</StyledContainer>

					<StyledContainer>
						<StyledInput
							type='text'
							id='lastName'
							name='lastName'
							placeholder='Last Name'
							value={form.lastName}
							onChange={e => handleChange(e, form, setForm, setErrors)}
						/>
						<p>{errors.lastName}</p>
					</StyledContainer>

					<StyledContainer>
						<StyledInput
							type='text'
							id='email'
							name='email'
							placeholder='Email'
							value={form.email}
							onChange={e => handleChange(e, form, setForm, setErrors)}
						/>
						<p>{errors.email}</p>
					</StyledContainer>

					<StyledContainer>
						<StyledInput
							type='password'
							id='password'
							name='password'
							placeholder='Pasword'
							value={form.password}
							onChange={e => handleChange(e, form, setForm, setErrors)}
						/>
						<p>{errors.password}</p>
					</StyledContainer>

					<StyledButton type='submit'>CLAIM YOUR FREE TRYAL</StyledButton>
				</StyledForm>
			</StyledContainerOfContainer>
		</StyledTotalContainer>
	);
};
const validateForm = (form, setErrors) => {
	let formErrors = {};

	// Validate first name
	if (!form.firstName.trim()) {
		formErrors.firstName = 'First name is required';
	} else if (!/^[a-zA-ZÀ-ÿ']+([-'][a-zA-ZÀ-ÿ']+)*$/.test(form.firstName)) {
		formErrors.firstName = 'Invalid first name';
	}

	// Validate last name
	if (!form.lastName.trim()) {
		formErrors.lastName = 'Last name is required';
	} else if (!/^[a-zA-ZÀ-ÿ']+([-'][a-zA-ZÀ-ÿ']+)*$/.test(form.lastName)) {
		formErrors.lastName = 'Invalid last name';
	}

	// Validate email
	if (!form.email.trim()) {
		formErrors.email = 'Email is required';
	} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
		formErrors.email = 'Invalid email';
	}

	// Validate password
	if (!form.password.trim()) {
		formErrors.password = 'Password is required';
	}

	setErrors(formErrors);

	return Object.keys(formErrors).length === 0;
};

const handleSubmit = (e, form) => {
	if (validateForm()) {
		console.log('Form is valid. Send data:', form);
	} else {
		console.log('Form is invalid. Please correct the errors.');
	}
};

const handleChange = (e, form, setForm, setErrors) => {
	const { name, value } = e.target;
	setForm({
		...form,
		[name]: value
	});

	validateForm(form, setErrors);
};

export default Form;
