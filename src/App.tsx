import React, { useState } from "react";

export default function App() {
  const [mode, setMode] = useState("whey");

  return (
    <div style={{background:"#0a0a0a",color:"white",minHeight:"100vh",padding:"20px"}}>
      <img src="/logo-main.png" style={{height:80}} />
      <h1>Sclass Recipe Vault</h1>

      <div>
        <button onClick={()=>setMode("whey")}>Whey</button>
        <button onClick={()=>setMode("noWhey")}>No Whey</button>
      </div>

      <h2>Rice Crispy Treats ({mode})</h2>

      {mode==="whey" ? (
        <div>
          <p>Rice Krispies 40g</p>
          <p>Whey 20g</p>
          <p>Marshmallow 35g</p>
          <p>Butter 5g</p>
          <p>Crunchy version with protein</p>
        </div>
      ) : (
        <div>
          <p>Rice Krispies 40g</p>
          <p>Marshmallow 40g</p>
          <p>Butter 5g</p>
          <p>No protein powder version</p>
        </div>
      )}
    </div>
  );
}
