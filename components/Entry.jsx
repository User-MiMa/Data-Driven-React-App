const imagesURL = Object.values(
  import.meta.glob('../images/*.png', 
    { eager: true, query: '?url', import: 'default' })
);

console.log(imagesURL);

const images = imagesURL.map(function(url){
    return  <img key={url} src={url} alt="Japanese charachter" />
})

export default function Entry(props){
    return(
        <main>
            {images}
        </main>
    );
}