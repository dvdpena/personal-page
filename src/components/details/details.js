import React, { useContext } from "react";
import { pageContext } from "../../utils/nav_context";
import style from './details.module.css'

const Details = ()=>{
    const {page} = useContext(pageContext)
    return (
        <div className={style.details}>
          <h1>{page}</h1>
          <ul>
            <li className={style.content}>{stringa1}</li>
          </ul>
          <div className={style.progress}></div>
          <p className={style.content}>{stringa3}</p>
        </div>
    )
}


let stringa1 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed tellus et lorem semper consectetur. Curabitur ultrices enim massa. Cras at laoreet mauris. Phasellus posuere hendrerit hendrerit. Cras orci risus, lobortis sit amet convallis quis, molestie ut tellus. Suspendisse et nibh nec arcu placerat convallis quis quis turpis. Phasellus nec mauris ut lectus congue volutpat. Vivamus at molestie nisi, id faucibus mi. Nullam venenatis vehicula vehicula. Proin sit amet mi non purus iaculis condimentum in sit amet nulla.`

let stringa2 =`Mauris consequat hendrerit mauris at elementum. Sed lacus sapien, volutpat pulvinar rhoncus eget, mollis ut lacus. Quisque rhoncus laoreet augue id euismod. Morbi vitae laoreet nisl. Nam quis risus at nulla elementum molestie. Nullam mattis scelerisque mauris et rhoncus. Nam fermentum nulla purus, et convallis nisi pretium sit amet. Curabitur in efficitur tellus, a molestie metus. Phasellus ipsum velit, consectetur at sapien non, maximus ultrices odio. Suspendisse molestie, augue vitae placerat ultrices, ipsum ipsum suscipit tellus, vitae hendrerit erat est sed quam. Nam viverra sollicitudin bibendum. Donec eget accumsan libero.`

let stringa3 = `Fusce vitae aliquam felis. Nulla ullamcorper massa sed volutpat ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec lobortis posuere erat, eget mattis arcu sagittis in. Suspendisse pellentesque ac nunc in semper. Praesent nec nibh quis ante convallis faucibus. Integer eu eleifend elit. Nam elementum, turpis a eleifend luctus, mi risus semper massa, vel volutpat metus eros eget nisl. Nullam gravida urna vitae metus euismod tincidunt. Aenean et congue risus, quis gravida tellus. Vestibulum eget scelerisque sem.

Mauris in lobortis urna. Sed ac tortor laoreet, egestas ante a, luctus diam. Nullam et aliquet eros. Sed ut auctor leo, molestie vulputate tellus. Sed finibus lorem magna, ut vulputate leo tempus in. Vestibulum tortor metus, cursus nec velit sed, ullamcorper imperdiet sem. Nullam commodo commodo ligula, in porttitor risus sagittis ut.

In hendrerit porttitor orci non lobortis. Nullam in fringilla justo, ut ultrices mauris. Nullam velit dolor, scelerisque ac lacinia id, consequat a nisl. Mauris convallis luctus sapien, quis dictum lectus. Sed nunc leo, sodales sed urna a, fermentum eleifend est. Cras sollicitudin vulputate ullamcorper. Aenean sed turpis id quam varius bibendum bibendum vel ante. Suspendisse ut urna tincidunt, fringilla augue at, feugiat elit. Mauris a felis justo. Duis at nisi in odio ornare facilisis ac maximus velit.

In ac sapien lacus. Maecenas non pellentesque tortor. Fusce erat lorem, mattis eget elementum vel, mollis eu lectus. Ut suscipit purus est, sit amet venenatis ante porta pretium. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer in dictum leo. Maecenas euismod dui nisi, eget porttitor eros ullamcorper eu. Donec malesuada, metus a laoreet scelerisque, leo nisl convallis massa, sed convallis ligula elit at orci. In luctus turpis posuere mauris eleifend, non luctus odio venenatis. Nam libero quam, pulvinar ut ipsum eu, pellentesque lobortis dui.

Mauris eu lacus lectus. In non augue cursus, luctus sem in, accumsan tortor. Donec nisi lorem, vehicula sed facilisis id, egestas vel libero. Nam rutrum mattis metus. Nunc non orci in risus placerat mattis accumsan elementum mauris. Nam ac dolor pulvinar, fermentum est at, malesuada lectus. Nam eget urna in nisi aliquam auctor. Maecenas suscipit nulla sed neque consequat hendrerit.

Suspendisse mauris nisi, commodo id sapien id, congue bibendum risus. Suspendisse condimentum, leo sed eleifend aliquet, ex mauris congue erat, sed congue orci elit eu augue. Vestibulum blandit ex eu nibh mollis malesuada. Nunc convallis dui quis sapien ornare, non sagittis sem dignissim. Morbi non mi libero. Etiam dapibus nunc nibh, nec imperdiet massa ultrices eu. Vestibulum et lobortis est. Aliquam ullamcorper sollicitudin risus ac imperdiet. Duis interdum, lorem nec mollis dictum, enim augue pretium felis, ac tincidunt est dolor eu lacus. Aliquam vulputate, nisi nec volutpat vestibulum, dolor mi interdum nunc, vel ullamcorper diam tellus et eros. Etiam mi elit, commodo ac quam eu, maximus faucibus metus. Mauris consectetur lacus quis pellentesque accumsan.

Aliquam quis tellus eu eros finibus sollicitudin. Donec ultricies nibh cursus, aliquam eros non, venenatis metus. Vestibulum et tempor libero, at gravida massa. Duis consequat ex et ultricies rhoncus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur ac cursus metus. Proin malesuada semper maximus. Pellentesque sapien enim, ultrices sed nisl vitae, fermentum maximus leo. Etiam lobortis laoreet felis at lobortis. Morbi ut pulvinar dolor, a cursus lorem. Phasellus nunc lectus, molestie a libero non, euismod placerat sapien. Fusce posuere tellus in pulvinar accumsan.

Morbi eros eros, laoreet a vehicula id, facilisis eget ipsum. Aliquam erat volutpat. Praesent quis pulvinar turpis. Quisque aliquet ante id ex lobortis, a sagittis nibh congue. Suspendisse varius libero non neque imperdiet semper. Phasellus dictum leo risus, vel mollis diam pulvinar sit amet. Cras quis faucibus nunc. Nam sit amet leo eu nibh luctus mollis. Duis ac sapien sed neque imperdiet varius. Nulla molestie eros nunc, id viverra nunc tincidunt aliquam. Curabitur ac dolor euismod nisl venenatis hendrerit. In volutpat pharetra consequat. Nulla at dictum metus. Morbi volutpat elementum gravida. Donec et viverra arcu. Nam feugiat metus et erat egestas porttitor.`



export default Details