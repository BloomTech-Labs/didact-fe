import React, { useState } from 'react';
import { Mixpanel } from '../../utils/mixpanel' 

const AddResource = () => {
    const freshDate = new Date()
    const [contentType, setContentType] = useState('tool')
    const [articleValues, setArticleValues] = useState({
        date: freshDate.toISOString().slice(0, 10),
        title: '',
        body: '',
        topic: ''
    })
    const [nonArticleValues, setNonArticleValues] = useState({
        name: '',
        link: '',
        description: '',
        topic: ''
    })

    const handleChange = e => {
        contentType === 'article' ? setArticleValues({...articleValues, [e.target.name]: e.target.value})
        : setNonArticleValues({...nonArticleValues, [e.target.name]: e.target.value})
    }

    const handleType = e => {
        setContentType(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(contentType)
        contentType === 'article' ? Mixpanel.track("Article Created")
        : Mixpanel.track("Nonarticle resource created")
        //insert axios call here once endpoints set up
    }

    return (
        <div>
            <select value={contentType} onChange={handleType}>
                <option value="tool">Tool</option>
                <option value="article">Article</option>
                <option value="source">Source</option>
            </select>
            {contentType === 'article' ? (
                <form onSubmit={handleSubmit}>
                   <label>Title</label>
                   <input value={articleValues.title} onChange={handleChange} />
                   <label>Body</label>
                   <textarea value={articleValues.body} onChange={handleChange}/>
                   <label>Topic</label>
                   <input value={articleValues.topic} onChange={handleChange}/>
                   <button type="submit">Submit</button>
                </form>
            ) : (
                <form onSubmit={handleSubmit}>
                   <label>Name</label>
                   <input value={nonArticleValues.name} onChange={handleChange} />
                   <label>Link</label>
                   <input value={nonArticleValues.link} onChange={handleChange}/>
                   <label>Description</label>
                   <input value={nonArticleValues.description} onChange={handleChange}/>
                   <label>Topic</label>
                   <input value={nonArticleValues.topic} onChange={handleChange}/>
                   <button type="submit">Submit</button>
                </form>
            )}
        </div>
    )
}

export default AddResource;