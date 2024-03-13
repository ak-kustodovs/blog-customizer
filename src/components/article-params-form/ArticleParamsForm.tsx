import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { Select } from '../select';
import { RadioGroup } from '../radio-group';
import { Text } from 'components/text';
import { Separator } from '../separator';
import styles from './ArticleParamsForm.module.scss';

import {
	ArticleStateType,
	defaultArticleState,
	fontFamilyOptions,
	fontSizeOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
	OptionType,
} from 'src/constants/articleProps';
import React, { useState } from 'react';

const initialState = {
	fontFamilyOption: defaultArticleState.fontFamilyOption,
	fontSizeOption: defaultArticleState.fontSizeOption,
	fontColor: defaultArticleState.fontColor,
	backgroundColor: defaultArticleState.backgroundColor,
	contentWidth: defaultArticleState.contentWidth,
};

type TArticleParamsFormProps = {
	isOpen: boolean;
	setNewStyles: (newStyles: ArticleStateType) => void;
	onClick: () => void;
};

export const ArticleParamsForm = ({
	isOpen,
	setNewStyles,
	onClick,
}: TArticleParamsFormProps) => {
	const [state, setState] = useState(initialState);

	function onSubmit(e: React.FormEvent) {
		e.preventDefault();
		setNewStyles(state);
	}

	function onReset(e: React.FormEvent) {
		e.preventDefault();
		setState(initialState);
		setNewStyles(initialState);
	}

	return (
		<>
			<ArrowButton onClick={onClick} isOpen={isOpen} />
			<aside
				className={`${styles.container} ${
					isOpen ? styles.container_open : ''
				}`}>
				<form className={styles.form} onSubmit={onSubmit} onReset={onReset}>
					<Text as='h2' size={31} weight={800} align='left' family='open-sans'>
						Задайте параметры
					</Text>
					<Select
						options={fontFamilyOptions}
						selected={state.fontFamilyOption}
						onChange={(selected: OptionType) => {
							setState({ ...state, fontFamilyOption: selected });
						}}
						title='Шрифт'
					/>
					<RadioGroup
						name='radio'
						options={fontSizeOptions}
						selected={state.fontSizeOption}
						onChange={(selected: OptionType) => {
							setState({ ...state, fontSizeOption: selected });
						}}
						title='Размер шрифта'
					/>
					<Select
						options={fontColors}
						selected={state.fontColor}
						onChange={(selected: OptionType) => {
							setState({ ...state, fontColor: selected });
						}}
						title='Цвет шрифта'
					/>
					<Separator />
					<Select
						options={backgroundColors}
						selected={state.backgroundColor}
						onChange={(selected: OptionType) => {
							setState({ ...state, backgroundColor: selected });
						}}
						title='Цвет фона'
					/>
					<Select
						options={contentWidthArr}
						selected={state.contentWidth}
						onChange={(selected: OptionType) => {
							setState({ ...state, contentWidth: selected });
						}}
						title='Ширина контента'
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
