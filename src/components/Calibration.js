import React, {useEffect} from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

export const Calibration = ({ GazeCloudAPI }) => {
	const history = useHistory();

	useEffect(() => {
        if (GazeCloudAPI) {
            GazeCloudAPI.OnCalibrationComplete = () => {
                history.push("/account");
            }
        }
    }, [GazeCloudAPI, history]);

	if (!GazeCloudAPI) return (
		<Spinner className="d-flex justify-content-center" animation="border" role="status">
			<span className="visually-hidden">Loading...</span>
		</Spinner>
	)

	return (
		<div>
			<div className="center pt-5">
				<h2 className="h1-home"> Login successful! </h2>
				<br></br>
				<h4>
					Please follow the calibration process.
					<br></br> 
					On the completion, you will be redirected to your account.
				</h4>
				<br></br> 

				<Button className="col-3" type="button" onClick={() => GazeCloudAPI.StartEyeTracking()}>Start Calibration</Button>
				{/* <Button className="col-3" type="button" onClick={() => GazeCloudAPI.StopEyeTracking()}>Stop</Button> */}
			</div>
			<div id="gaze"
				style={{ position: 'absolute', display: 'none', width: '100px', height: '100px', borderRadius: '50%', border: 'solid 2px  rgba(255, 255,255, .2)', boxShadow: '0 0 100px 3px rgba(125, 125,125, .5)', pointerEvents: 'none', zIndex: 999999 }}>
			</div>
		</div>
	)
}
