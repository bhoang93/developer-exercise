let recommendationList = [];
const recommendationsDiv = document.getElementById("recommendations");

const displayProduct = (title, image, price, productLink) => {
  const productInfo = document.createElement("div");
  productInfo.className = "productDiv";

  const aTag = document.createElement("a");
  aTag.href = productLink;

  const img = document.createElement("img");
  img.src = image;
  aTag.appendChild(img);

  const h4 = document.createElement("h4");
  h4.appendChild(document.createTextNode(title));
  aTag.appendChild(h4);
  productInfo.appendChild(aTag);

  const p = document.createElement("p");
  p.appendChild(document.createTextNode("£" + price + ".00"));
  productInfo.appendChild(p);

  recommendationsDiv.appendChild(productInfo);
};

fetch(
  "https://raw.githubusercontent.com/bhoang93/developer-exercise/master/data/recommendations.json"
)
  .then(data => data.json())
  .then(products => (recommendationList = products.hits))
  .then(() =>
    recommendationList.map(product => {
      if (product.image) {
        displayProduct(
          product.product_name,
          product.image.link,
          product.price,
          product.link
        );
      }
    })
  );
