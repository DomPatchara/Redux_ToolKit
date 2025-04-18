# Redux Toolkit --- *Movie-List* ( Learning )
 -  Global state ที่ช่วยให้เราสามารถเก็บข้อมูล และส่งผ่านข้อมูลข้าม components ได้

## [0] npm install @reduxjs/toolkit react-redux
## [1] *Create Store* 
 สร้างคลังสำหรับเก็บข้อมูล สามารถสร้างได้หลาย Stores.
   - import { configureStore }
   - import [storename_1]Reducer from "./[storename_1]Slice"
   - import [storename_2]Reducer from "./[storename_2]Slice"
   - export store = configureStore({ reducer: { XStore:XReducer, YStore:YReducer } })
## [2] *Create Slice* 
   - import { createSlice }
   - [2.1] set initialState ค่าเริ่มต้น  Ex: const initialState = { movies: [] }
   - [2.2] **reducer** --> คือ function เพื่อ update ข้อมูล เช่น **AddItem**: (state, action)
   - [2.3] **state** --> คือ Current data 
   - [2.4] **action** ---> **action.payload** คือ ข้อมูลจริงๆที่เราส่งเข้าไปเพื่อ update state

## [3] *Redux Provider* wrapp children 
   เราต้องครอบ components ทั้งหมดของเราด้วย Redux Provider (create in form component)

## [4] useSelector + useDispatch ( ใช้ข้อมูลจาก store )
 - [4.1] **useSelector** : คือการดึงข้อมูลมาใช้จาก Store
         Ex. const movies = useSelector((state) => state.XStore.movies)
 - [4.2] **useDispatch** : คือการใช้ function จาก Slice ( import 1.useDispatch + 2.function from Slice )

   ``` javascript
    const dispatch = useDispatch(); 
    const handleRemoveMovie = (id) => {
        dispatch(removeMovie(id)
   )};
   ```
   

# Screen Shot
![image](https://github.com/user-attachments/assets/ad253fc0-85f3-4048-9997-0926d4fee553)
