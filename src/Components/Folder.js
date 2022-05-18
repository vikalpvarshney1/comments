import React, { useState } from 'react'

const Folder = ({ Explorer }) => {
    const [expand, setexpand] = useState(false)

    if (Explorer.isFolder) {
        return (<div>
            <span onClick={() => setexpand(!expand)}>{Explorer.author} {Explorer.points} Points <br />
                <strong style={{ paddingLeft: "15px" }}>{Explorer.body} </strong><br />
                <span style={{ paddingLeft: "15px", color: "gray" }}>Reply Give Award Share Report Save</span>
                <br /></span>
            <div style={{ display: expand ? "block" : "none", paddingLeft: "15px" }}>
                {
                    Explorer.replies.map((exp) => {
                        {/* return <span>{exp.author}</span>
                     */}
                        return <Folder Explorer={exp} />
                    })
                }
            </div>

        </div>
        )
    }
    else {
        return <span>{Explorer.author}</span>
    }
}

export { Folder }