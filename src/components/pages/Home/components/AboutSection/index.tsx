import { Image } from "components/Image";
import { SectionLimiter } from "components/SectionLimiter";
import Slider from "react-slick";

import {
	Container,
	DescriptionContainer,
	Title,
	Description,
	SliderContainer,
	Slide,
	SlideDescriptionContainer,
	SlideTitle,
	SlideDescription,
} from "./styles";

export const AboutSection: FC = () => (
	<SectionLimiter>
		<Container>
			<DescriptionContainer>
				<Title>
					A sua melhor amiga para compra e venda de conteúdo adulto!
				</Title>
				<Description>
					Oii, eu sou a Maitê e eu ajudo minhas amigas a venderem conteúdos
					adultos pelo Discord.
				</Description>
			</DescriptionContainer>
			<SliderContainer>
				<Slider
					arrows={false}
					dots
					autoplay
					pauseOnHover
					pauseOnDotsHover
					pauseOnFocus
					className="center"
					centerMode
					infinite
					centerPadding="6rem"
					slidesToShow={3}
					speed={500}
					responsive={[
						{
							breakpoint: 768,
							settings: {
								slidesToShow: 1,
								centerPadding: "0",
							},
						},
					]}
				>
					{/* eslint-disable-next-line @typescript-eslint/no-magic-numbers */}
					{[0, 1, 2, 3, 4, 5, 6].map(id => (
						<Slide key={id}>
							<SlideDescriptionContainer>
								<SlideTitle>Fala comigo!</SlideTitle>
								<SlideDescription>
									Fale comigo dentro do seu Servidor do Discord!
								</SlideDescription>
							</SlideDescriptionContainer>
							<Image
								src="/maite.jpg"
								width="376px"
								height="376px"
								className="image"
							/>
						</Slide>
					))}
				</Slider>
			</SliderContainer>
		</Container>
	</SectionLimiter>
);
