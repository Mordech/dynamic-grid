import { Carousel } from './components/carousel/carousel';
import { HeadlineContainer } from './layouts/headline-container';
import { Main } from './layouts/main';
import { GithubBadge, TourCard } from './components';

// /**
//  * @deprecated
//  */
// const ButtonContainer = styled.div`
//   display: flex;
//   gap: 0.5rem;
// `;

// /**
//  * @deprecated
//  */
// export const DeleteThisContainer = styled.div`
//   display: flex;
//   padding: 2rem;
//   gap: 4rem;
//   flex-direction: column;
// `;

// function App() {
//   const [isDisabled, setIsDisabled] = useState(true);

//   return (
//     <DeleteThisContainer>
//       <Carousel minColumnWidth="24rem" gap="1rem">
//         {Array(10)
//           .fill('')
//           .map((_, i) => (
//             <TourCard
//               key={i}
//               title="Test Tour"
//               description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
//               image="https://picsum.photos/seed/1/800/800"
//               rating={4.5}
//               discount={50}
//               duration="7 days"
//               difficulty="easy"
//             />
//           ))}
//       </Carousel>
//       <GithubBadge href="#" />
//       <ToggleThemeButton size="compact" />
//       <ButtonContainer>
//         <Button
//           aria-label="Previous"
//           disabled={isDisabled}
//           onClick={() => setIsDisabled(!isDisabled)}
//           radius="round"
//           variant="tonal"
//           size="compact"
//         >
//           <Icon icon="arrow_back" />
//         </Button>

//         <Button
//           aria-label="Next"
//           onClick={() => setIsDisabled(!isDisabled)}
//           radius="round"
//           variant="tonal"
//           size="compact"
//         >
//           <Icon icon="arrow_forward" />
//         </Button>
//       </ButtonContainer>
//       <Carousel
//         minColumnWidth="21.5rem"
//         gap="2rem 1rem"
//         isScroll
//         scrollOptions={{ hideScrollbar: true, scrollSnapAlign: 'start' }}
//       >
//         <TourCard
//           title="Test Tour"
//           description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
//           image="https://picsum.photos/seed/1/800/800"
//           rating={4.5}
//           discount={50}
//           duration="7 days"
//           difficulty="easy"
//         />
//         <TourCard
//           title="Very Long Tour Name That Should Wrap"
//           description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
//           image="https://picsum.photos/seed/2/800/800"
//           rating={2.5}
//           duration="2 days"
//           difficulty="medium"
//         />
//         <TourCard
//           title="Cool Tour"
//           description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
//           image="https://picsum.photos/seed/3/800/800"
//           rating={5}
//           discount={50}
//           duration="4 days"
//           difficulty="difficult"
//         />
//       </Carousel>
//       <Carousel
//         minColumnWidth="20rem"
//         gap="2rem 1rem"
//         isScroll
//         scrollOptions={{ rows: 2, hideScrollbar: true }}
//         dividedBy={2}
//       >
//         <TestimonialCard
//           avatar="https://loremflickr.com/72/72/person?lock=1"
//           name="John Doe"
//           location="New York City, NY"
//           testimonial="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero et aliquam ultrices, nunc elit tincidunt urna, ac lacinia justo nisl sed nunc."
//         />
//         <TestimonialCard
//           avatar="https://loremflickr.com/72/72/person?lock=2"
//           name="Jane Smith"
//           location="Los Angeles, CA"
//           testimonial="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero et aliquam ultrices, nunc elit tincidunt urna, ac lacinia justo nisl sed nunc."
//         />
//         <TestimonialCard
//           avatar="https://loremflickr.com/72/72/person?lock=3"
//           name="Bob Johnson"
//           location="Chicago, IL"
//           testimonial="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero et aliquam ultrices, nunc elit tincidunt urna, ac lacinia justo nisl sed nunc."
//         />
//         <TestimonialCard
//           avatar="https://loremflickr.com/72/72/person?lock=4"
//           name="Mary Williams"
//           location="Houston, TX"
//           testimonial="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero et aliquam ultrices, nunc elit tincidunt urna, ac lacinia justo nisl sed nunc."
//         />
//         <TestimonialCard
//           avatar="https://loremflickr.com/72/72/person?lock=5"
//           name="James Brown"
//           location="Philadelphia, PA"
//           testimonial="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero et aliquam ultrices, nunc elit tincidunt urna, ac lacinia justo nisl sed nunc."
//         />
//         <TestimonialCard
//           avatar="https://loremflickr.com/72/72/person?lock=6"
//           name="Patricia Jones"
//           location="Phoenix, AZ"
//           testimonial="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero et aliquam ultrices, nunc elit tincidunt urna, ac lacinia justo nisl sed nunc."
//         />
//         <TestimonialCard
//           avatar="https://loremflickr.com/72/72/person?lock=7"
//           name="Michael Miller"
//           location="San Antonio, TX"
//           testimonial="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero et aliquam ultrices, nunc elit tincidunt urna, ac lacinia justo nisl sed nunc."
//         />
//         <TestimonialCard
//           avatar="https://loremflickr.com/72/72/person?lock=8"
//           name="Linda Davis"
//           location="San Diego, CA"
//           testimonial="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero et aliquam ultrices, nunc elit tincidunt urna, ac lacinia justo nisl sed nunc."
//         />
//         <TestimonialCard
//           avatar="https://loremflickr.com/72/72/person?lock=9"
//           name="Robert Wilson"
//           location="Dallas, TX"
//           testimonial="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero et aliquam ultrices, nunc elit tincidunt urna, ac lacinia justo nisl sed nunc."
//         />
//       </Carousel>
//       <Carousel minColumnWidth="15rem" gap="1rem">
//         <FeaturedCard
//           backgroundImage="url(https://loremflickr.com/600/600/flower?lock=1)"
//           description="Enigmatic Oasis Discovered in the Heart of the Sahara Desert!"
//         />

//         <FeaturedCard
//           backgroundImage="url(https://loremflickr.com/600/600/flower?lock=3)"
//           description="Mystical Underwater City Unearthed in the Pacific Depths!"
//         />
//       </Carousel>
//       <Carousel minColumnWidth="10rem" gap="1rem">
//         <MusicCard
//           variant="album"
//           src="https://loremflickr.com/320/320/abstract?lock=1"
//           cardInfo={{ artist: 'John Doe', albumName: 'Awesome Album' }}
//         />
//         <MusicCard
//           variant="album"
//           src="https://loremflickr.com/320/320/abstract?lock=4"
//           cardInfo={{ artist: 'Jane Smith', albumName: 'Lonesome' }}
//         />
//       </Carousel>
//       <DynamicGrid minColumnWidth="7rem" gap="1rem">
//         <MusicCard
//           variant="artist"
//           src="https://loremflickr.com/320/320/music_artist?lock=1"
//           cardInfo={{ artist: 'Jane Smith' }}
//         />
//         <MusicCard
//           variant="artist"
//           src="https://loremflickr.com/320/320/music_artist?lock=2"
//           cardInfo={{ artist: 'Bob Johnson' }}
//         />
//       </DynamicGrid>
//     </DeleteThisContainer>
//   );
// }

function App() {
  return (
    <Main>
      <GithubBadge />
      <HeadlineContainer>
        <h1>
          <strong>The Dynamic Grid Component:</strong>
          <br />
          Create responsive layouts without breakpoints
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Nisi vel amet eu integer.
          Velit pharetra non vulputate orci dignissim. Eros arcu ut mauris est
          molestie imperdiet. Arcu metus sed donec in duis turpis.
        </p>
      </HeadlineContainer>
      <Carousel
        minColumnWidth="22rem"
        gap="1rem"
        scrollOptions={{ hideScrollbar: true, rows: 2 }}
      >
        {Array(10)
          .fill('')
          .map((_, i) => (
            <TourCard
              key={i}
              title="Test Tour"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
              image="https://picsum.photos/seed/1/800/800"
              rating={4.5}
              discount={50}
              duration="7 days"
              difficulty="easy"
            />
          ))}
      </Carousel>
    </Main>
  );
}

export default App;
