function App() {
  async function fetchData() {
    const response = await fetch(
      "https://myanimelist.net/v1/oauth2/token?client_id=5d9dfcf5d91d92cae8248ec114f4ce60&client_secret=aa5707bc157d2dd19258530db43da57ff72a680808a2fb0346839bd78c0ff108&code=def50200a2e42032fe1fadc3ebd59cd81cea6b2e19edec42838da9b0dbd84a8e5f510aa4e53ca808c1a60e461f1bc045ea9d3ada687ad2d3c63b51e2aacb515512ea190ff3a79551c7599fe6ef1907ea76a5a96d03138caef17c518d01588d3abd56ca785247464f59fb679e9b13624a0bc95e8e1e3a557e22767dfb477662dad5495af0cd4630d501a14e6c152f23cc86fa12dc05e4c594d82704d8714554a357a9a5f5fb70068a49a2c7e49c9e28fbda9d7a4a9d782ae08b81e0e4aadd6226dce42d4337971bd2590a34b0a665429abbfed81f6f0ab86096678e3cb95ba27237d60f47d5b1e7c83a34a054bbc8db7f20a6f06a69ff2158c32ef064fe5a2312d0ab393fd865da5a0c7177612aa07d48ca4374fa95bdef2c730d5536ee124620a9d33bef863fcebdf9f5f9261ce20ce02e5c5c76754e817eaf5db5eb2a5dd69bb4072985bd65bb54c84e17ab58041a0f374b1c06124bfe9a46d9ec946175f25ebfa38eaa063d7f42c327d04c6e1df067d9783e93c5ba5d42561607dc8f4aee1e44cf60fc5cbfc6889021cd5b067b1c5f4fa597bd6220c94e58352964b68adaf81c29a2c64c3272d8a56837dc0ec484556735b0f3d3ca629135836bf289585d4a3d692b27a32bc4b161933f36e01b4ac92e46c3193c18b70288d75997dc9ce8aad079f80f21b5161451bd&code_verifier=gAm6Kdvp2TbrWseHvE0mPlf7TxkgtfJv4dojuFuPBfdx96LTv4DCQrtN3rgcY6RfnS8Jp_UFg5h3Vxz3gL0rBLLrjPTb8zL5wV6S_IULJwi5eqhi2o9zsuME7pzT3g_L&grant_type=authorization_code&redirect_uri=https://localhost:5130/",
      {
        headers: {
          "Content-Type": "application/json",
          method: "POST",
          host: "https://sakurajima.netlify.app/",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }
  fetchData();
  return <div>hello world</div>;
}

export default App;
