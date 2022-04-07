import React, { useState } from 'react'
import { Form, Container, Button, FormSelect, select, Option } from 'react-bootstrap'

const AdventureForm = (props) => {
    const [difficulty, setdifficulty] = useState(0)
    const [type, setType] = useState()
    const {adventure, handleChange, handleSubmit, heading} = props

    return (
        <Container className="justify-content-center">
            <h3>{heading}</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Label>Name</Form.Label>
                <Form.Control 
                    placeholder="What is The Name of Your Adventure?"
                    value={adventure.name}
                    name='name'
                    onChange={handleChange}
                />
                <br></br>
                <div>
                    <select class="form-select form-select-md mb-3" id="types" value={adventure.type}
                        onChange={handleChange}>
                                <option value="Walk">Walk</option>
                                <option value="Road Run">Road Run</option>
                                <option value="Trail Run">Trail Run</option>
                                <option value="Road Bike">Road Bike</option>
                                <option value="Mountain Bike">Mountain Bike</option>
                                <option value="Hike">Hike</option>
                                <option value="Swim">Swim</option>
                    </select>
                </div>
                <br></br>
                <Form.Label>Time</Form.Label>
                <Form.Control 
                    placeholder="How Long Was Your Adventure (Minutes)?"
                    value={adventure.time}
                    type="number"
                    name='time'
                    onChange={handleChange}
                />
                <br></br>
               <Form.Label>Distance</Form.Label>
                <Form.Control 
                    placeholder="What Was The Distance of Your Adventure (Miles)?"
                    value={adventure.distance}
                    name='distance'
                    type="number"
                    onChange={handleChange}
                />
                <br></br>
                <Form.Label>Difficulty Level</Form.Label>
                <p>{adventure.difficultyLevel}</p>
                   <Form.Control 
                   type="range" 
                   value={adventure.difficultyLevel}
                   name="difficultyLevel" 
                   className="form-range" 
                   min="0" 
                   max="5" 
                   step="1" 
                   id="customRange3"
                   onChange={handleChange}
                   />
                   <br></br>
                {/* <Form.Label>Difficulty Level</Form.Label>
                <Form.Control 
                    // placeholder="how difficult was your adventure on a scale of 0-5?"
                    value={adventure.difficultyLevel}
                    class="form-range"
                    type="range"
                    name='difficultyLevel'
                    step="1"
                    min="0"
                    max="5"
                    for="customRange3"
                    id="customRange3"
                    onChange={handleChange}
                /> */}
                <Form.Label>Location</Form.Label>
                <Form.Control 
                    placeholder="Zip Code of Your Adventure?"
                    value={adventure.location}
                    name='location'
                    onChange={handleChange}
                    minlength="5"
                    maxlength="5"
                />
                {/* <Form.Label>Geo location</Form.Label> */}
                {/* <Form.Control 
                    placeholder="Latitude And Longitude of Adventure?"
                    value={adventure.geolocation}
                    name='geolocation'
                    onChange={handleChange}
                /> */}
                <br></br>
                <Button type='submit'>Submit</Button>
            </Form>
        </Container>
    )
}

export default AdventureForm