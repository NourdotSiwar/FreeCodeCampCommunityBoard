import React from 'react';
import Description from './Description';

import js from './JS.png';
import html from './html.png';
import css from './css.png';
import Cpp from './Cplusplus.png';
import C from './C.png';
import CSHARP from './CSHARP.png';
import KOTLIN from './KOTLIN.png';
import SWIFT from './SWIFT.png';
import JAVA from './JAVA.png';
import PYTHON from './PYTHON.png';
import SQL from './SQL.png';
import SOLIDITY from './SOLIDITY.jpg';

const Board = () => {
      return (
      <div>
            <table>
                  <tbody>
                        <tr>
                        <td><img src={js} className="js"></img><Description desc ="JavaScript" link = "https://www.youtube.com/watch?v=jS4aFq5-91M"/></td>
                        <td><img src={html} className="html"></img><Description desc ="HTML" link = "https://www.youtube.com/watch?v=kUMe1FH4CHE"/></td>
                        <td><img src={css} className="css"></img><Description desc ="CSS" link = "https://www.youtube.com/watch?v=OXGznpKZ_sA"/></td>
                        </tr>
                        <tr>
                        <td><img src={Cpp} className="Cpp"></img><Description desc ="C++" link="https://www.youtube.com/watch?v=8jLOx1hD3_o"/></td>
                        <td><img src={CSHARP} className="Csharp"></img><Description desc ="C#" link="https://www.youtube.com/watch?v=GhQdlIFylQ8"/></td>
                        <td><img src={C} className="C"></img><Description desc ="C" link="https://www.youtube.com/watch?v=KJgsSFOSQv0"/></td>
                        </tr>
                        <tr>
                        <td><img src={KOTLIN} className="Kotlin"></img><Description desc ="Kotlin" link="https://www.youtube.com/watch?v=EExSSotojVI"/></td>
                        <td><img src={SWIFT} className="Swift"></img><Description desc ="Swift" link="https://www.youtube.com/watch?v=8Xg7E9shq0U"/></td>
                        <td><img src={JAVA} className="Java"></img><Description desc ="Java" link="https://www.youtube.com/watch?v=A74TOX803D0"/></td>
                        </tr>
                        <tr>
                        <td><img src={PYTHON} className="Python"></img><Description desc ="Python" link="https://www.youtube.com/watch?v=eWRfhZUzrAc"/></td>
                        <td><img src={SQL} className="SQL"></img><Description desc ="SQL" link="https://www.youtube.com/watch?v=HXV3zeQKqGY"/></td>
                        <td><img src={SOLIDITY} className="Solidity"></img><Description desc ="Solidity" link="https://www.youtube.com/watch?v=gyMwXuJrbJQ"/></td>
                        </tr>
                  </tbody>
            </table>
      </div>
      );
}

export default Board;