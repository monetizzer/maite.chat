import { COLORS } from "assets/colors";
import { FONTS } from "assets/fonts";
import styled from "styled-components";

export const Container = styled.section``;

export const DescriptionContainer = styled.header`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	text-align: center;
`;

export const Title = styled.h2`
	${FONTS.heading3}
`;

export const Description = styled.p`
	${FONTS["text0.5"]}
`;

export const SliderContainer = styled.div`
	margin: 2rem 0;

	.slick-slide {
		background: ${COLORS.secondary};
		padding: 1.5rem 2rem;
		border-radius: 8px;
		transform: scale(0.99);

		@media (max-width: 768px) {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			transform: scale(1);
		}
	}

	.slick-dots {
		> li > button {
			&::before {
				color: ${COLORS.white};
			}
		}
	}

	@media (max-width: 768px) {
		max-width: 47.5rem;
		margin: 2rem auto;
	}
`;

export const Slide = styled.div`
	.image {
		border-radius: 8px;
		transform: scale(0.9);
	}
`;

export const SlideDescriptionContainer = styled.div`
	text-align: center;
`;

export const SlideTitle = styled.p`
	font-weight: 500;
`;

export const SlideDescription = styled.p`
	${FONTS.text2}
`;
