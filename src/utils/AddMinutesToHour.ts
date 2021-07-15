import moment from "moment";

interface DataConfigParams {
	hour: string,
	minutesAdd: number
}

function AddMinutesToHour(configParams: DataConfigParams) {
	return moment(configParams.hour, 'HH:mm').add(configParams.minutesAdd, 'minutes').format('HH:mm')
}

export default AddMinutesToHour;