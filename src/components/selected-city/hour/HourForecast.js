import styled from 'styled-components';

const Card = styled.div`
  background: ${props => props.theme[props.cardColor]};
  border-radius: 5px;
  box-shadow: ${props => props.theme.boxShadow};
  color: white;
  margin: 20px 8px;
  padding: 20px 25px;
  text-align: center;
`
const Day = styled.h2`
`
const Time = styled.div`
`
const Temperature = styled.div`
  font-size: ${props => props.theme.s3};
  font-weight: 600;
`

function HourForecast({time, temperature, weatherIcon, description, cardColor}) {
  return(
    <>
      <Card cardColor={cardColor}>
        <Day>{time.day}</Day>
        <Time>{time.time}</Time>
        <img src={weatherIcon} alt={description}/>
        <Temperature>{temperature}°</Temperature>
      </Card>
    </>
  )
}

export default HourForecast;