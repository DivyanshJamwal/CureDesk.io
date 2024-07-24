const Hospital = require("../model/Hospital.model")

async function SaveNewDataInHospitals(name, city, image, speciality, rating){
    try{
        const result = await Hospital.create({
            name : name,
            city : city,
            image : image,
            speciality : speciality,
            rating : rating
        })


        if(result){
            return {
                success : true,
                data : result
            }
        }else{
            throw new Error("Error while saving data in hospitals")
        }

    }catch(err){
        console.log(err)
        return {
            success : false
        }
    }
}

async function GetHospitalsById(city){
    try{
    const cityName = city.toLowerCase()
      const result =  await Hospital.find({ city: { $regex: cityName, $options: 'i' } })

      if(result){
        return {
            success : true,
            data : result
        }
      }else{
        throw new Error("Error inside the GetAllHospital Service")
      }

    }catch(err){
        console.log(err)
        return {
            success : false
        } 
    }
}

async function GetAllHospitals(){
    try{
      
      const result =  await Hospital.find()

      if(result){
        return {
            success : true,
            data : result
        }
      }else{
        throw new Error("Error inside the GetAllHospital Service")
      }

    }catch(err){
        console.log(err)
        return {
            success : false
        } 
    }
}

async function DeleteHospitalById(_id){
    try{
        const result = await Hospital.findByIdAndDelete(_id)
        if(result){
            return{
                success : true,
                data : result
            }
        }else{
            throw new Error("Error in DeleteHospitalById Service")
        }
    }
    catch(err){
        console.log(err)
        return{
            success : false
        }
    }
}

async function UpdateHospitalById(_id, data){
    try{
        const result = await Hospital.findByIdAndUpdate(_id, data, {new : true})
        if (!result) {
            throw new Error(`Hospital with ID ${_id} not found`);
          }
          return result;
    }catch(err){
        console.log(err)
        return{
            success : false
        }
    }
}


async function AddHospitalDetails(_id, data){
    try{
        const result = await Hospital.findByIdAndUpdate(_id, data, {new : true})
        if (!result) {
            throw new Error(`Hospital with ID ${_id} not found`);
          }
          return result;
    }catch(err){
        console.log(err)
        return{
            success : false
        }
    }
}


module.exports = {
    SaveNewDataInHospitals,
    GetAllHospitals,
    DeleteHospitalById,
    UpdateHospitalById,
    AddHospitalDetails,
    GetHospitalsById
}