
import '../styles/form.css';

const GeneralInfo = ({formData, setFormData}) => {
    const handleFormData = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData(previousData => {
            return {...previousData, [name]: value}
        });
    }

    return (
        <form className='form-container'>
            <label className='input-box' htmlFor='name'>Name <br/>
                <input type='text' id='name' name='name' placeholder='Owner' 
                onChange={(e) => {handleFormData(e)}} className='input' value={"" || formData.name}/>
            </label><br/>

            <label className='input-box' htmlFor='mobile'>Mobile <br/>
                <input type='text' id='mobile' name='mobile' placeholder='Enter Mobile Number' 
                onChange={(e) => {handleFormData(e)}} className='input' value={"" || formData.mobile}/>
            </label><br/>

            <label className='input-box' htmlFor='postedBy'>Posted By <br/>
                <select id='postedBy' name='postedBy' onChange={(e) => handleFormData(e)} className='selection-input'>
                    {formData.postedBy === "" ? <option value='Posted By'>Posted By</option> : 
                    <option value={formData.postedBy}>{formData.postedBy}</option>}
                    <option value='Owner'>Owner</option>
                    <option value='Dealer'>Dealer</option>
                    <option value='Relative'>Relative</option>
                    <option value='Other'>Other</option>
                </select>
            </label><br/>

            <label className='input-box' htmlFor='saleType'>Sale Type <br/>
                <select id='saleType' name='saleType' onChange={(e) => handleFormData(e)} className='selection-input'>
                    {formData.saleType === "" ? <option value='Please Select'>Please Select</option> : 
                    <option value={formData.saleType}>{formData.saleType}</option>}
                    <option value='Standard Sales'>Standard Sales</option>
                    <option value='Bank Owned Sales'>Bank Owned Sales</option>
                    <option value='Short Sales'>Short Sales</option>
                </select>
            </label><br/>

            <label className='input-box' htmlFor='featuredPackage'>Featured Package <br/>
                <select id='featuredPackage' name='featuredPackage' onChange={(e) => handleFormData(e)} className='selection-input'>
                    {formData.featuredPackage === "" ? <option value='Please Select'>Please Select</option> : 
                    <option value={formData.featuredPackage}>{formData.featuredPackage}</option>}
                    <option value='Yes'>Yes</option>
                    <option value='No'>No</option>
                </select>
            </label><br/>

            <label className='input-box' htmlFor='PPDPackage'>PPD Package <br/>
                <select id='PPDPackage' name='PPDPackage' onChange={(e) => handleFormData(e)} className='selection-input'>
                    {formData.PPDPackage === "" ? <option value='Please Select'>Please Select</option> : 
                    <option value={formData.PPDPackage}>{formData.PPDPackage}</option>}
                    <option value='Yes'>Yes</option>
                    <option value='No'>No</option>
                </select>
            </label><br/>
        </form>
    )
}

export default GeneralInfo;