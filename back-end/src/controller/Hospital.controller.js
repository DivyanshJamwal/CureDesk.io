const {SaveNewDataInHospitals, GetAllHospitals : GetAllHospitalService, GetHospitalsById , DeleteHospitalById : DeleteHospitalByIdService, UpdateHospitalById, AddHospitalDetails} = require("./../service/Hospital.service")

async function CreateNewHospital(req, res){

    try{

        const {name, city, image, speciality, rating} = req.body;
        const result = await SaveNewDataInHospitals(name, city, image, speciality, rating)

        if(result.success){
            res.status(201).json({
                success : true,
                data : result.data
                
            })
        }else{
            throw new Error("Error while calling CreateNewHospital Controller")
        }
    }catch(err){
        res.status(500).json({
            success : false,
            message: err.message
        })
    }

}

async function GetAllHospitals(req, res){

    try{
        const result = await GetAllHospitalService()

        if(result.success){
            res.status(200).json({
                success : true,
                data : result.data
            })
        }else{
            throw new Error("Error in GetAllHospital Controller")
        }

    }catch(err){
        res.status(500).json({
            success : false
        })
    }
}
async function GetHospitalsByIdController(req, res){

    try{
        const city = req.query.city.toLowerCase()
        const result = await GetHospitalsById(city)

        if(result.success){
            res.status(200).json({
                success : true,
                data : result.data
            })
        }else{
            throw new Error("Error in GetAllHospital Controller")
        }

    }catch(err){
        res.status(500).json({
            success : false
        })
    }
}

async function DeleteHospitalByIdController(req,res){
    try{
        const {id : _id} = req.query;
        const result = await DeleteHospitalByIdService(_id)

        if(result.success){
            res.status(200).json({
                success : true,
                data : result.data
            })
        }
    }
    catch(err){
        res.status(500)
        return{
            success : false
        }
    }
}

async function UpdateHospitalByIdController(req, res){
    try {
        const id = req.query.id;
        const data = req.body;
        const updatedData = await UpdateHospitalById(id, data);
        res.json(updatedData);
    } catch (error) {
        res.status(500)
        return{
            success : false
        }
    }
}

async function AddHospitalDetailsController(req, res){
    try {
        const id = req.query.id;
        const data = req.body;
        const updatedData = await AddHospitalDetails(id, data);
        res.json(updatedData);
    } catch (error) {
        res.status(500)
        return{
            success : false
        }
    }
}

module.exports = {
    CreateNewHospital,
    GetAllHospitals,
    DeleteHospitalByIdController,
    UpdateHospitalByIdController,
    AddHospitalDetailsController,
    GetHospitalsByIdController
}