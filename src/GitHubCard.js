import React, {useEffect, useState} from 'react'
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import CardGroup from "react-bootstrap/CardGroup"

const styles = {
    card: {
      backgroundColor: '#e0f6ff',
      borderRadius: '20%',
      padding: '3rem',
      boxShadow: '1px 2px 9px #000000'
      
    },
    header:{
        paddingBottom:'.5rem'
    },
    button:{
        marginBottom:'1.5rem',
        borderRadius:'.3',
        zindex:'5',
        boxShadow: '1px 1px 3px #000022'
    },
    container:{
        marginTop:'1.5rem',
    },
    cardImage: {
      objectFit: 'cover',
      borderRadius: '50%',
      width: '250px',
      height: 'auto',
      margin: '1.5rem',
      padding:".25rem",
      boxShadow: '1px 2px 9px #000000'
    }
  }
export default function GitHubCard() {
    const [gitHubName, setGitHubName] = useState('')
    const [gitHubURL, setGitHubURL] = useState('')
    const [gitHubImgURL, setGitHubImgURL] = useState('')
    const [gitHubBio, setGitHubBio] = useState('')

    useEffect(() => {
        fetch('https://api.github.com/users/ajphnx')
        .then(res => res.json())
        .then(data => {
            setGitHubName(data.name)
            setGitHubURL(data.html_url)
            setGitHubImgURL(data.avatar_url)
            setGitHubBio(data.bio)
        })  
    },[])

    return (
        <Container style={styles.container}>
            <CardGroup className="m-5 d-block" style={styles.card}>
                <Card style ={{width:'20rem'}}>
                <Card.Header >Github Profile Info:</Card.Header>
                <Card.Title style={styles.header}>{gitHubName}</Card.Title>
                <a href={gitHubURL}>
                    <Button variant="primary" style={styles.button}>Link to GitHub profile</Button>
                </a>
                
                    <Card.Img variant="top" src={gitHubImgURL} alt='Github profile image' style={styles.cardImage}/>
                <Card.Body>
                    {gitHubBio}
                </Card.Body>
                </Card>
            </CardGroup>
        </Container>
    )
}