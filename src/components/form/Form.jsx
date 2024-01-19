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

	const handleChange = e => {
		const { name, value } = e.target;
		setForm({
			...form,
			[name]: value
		});
	};

	const validateForm = () => {
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

		// Return true if no errors, otherwise false
		return Object.keys(formErrors).length === 0;
	};

	const handleSubmit = e => {
		e.preventDefault();

		if (validateForm()) {
			// Perform form submission logic here
			console.log('Form is valid. Send data:', form);
		} else {
			console.log('Form is invalid. Please correct the errors.');
		}
	};

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
				<StyledForm onSubmit={handleSubmit}>
					<StyledContainer>
						<StyledInput
							type='text'
							id='firstName'
							name='firstName'
							placeholder='First Name'
							value={form.firstName}
							onChange={handleChange}
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
							onChange={handleChange}
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
							onChange={handleChange}
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
							onChange={handleChange}
						/>
						<p>{errors.password}</p>
					</StyledContainer>

					<StyledButton type='submit'>CLAIM YOUR FREE TRYAL</StyledButton>
				</StyledForm>
			</StyledContainerOfContainer>
		</StyledTotalContainer>
	);
};

export default Form;
