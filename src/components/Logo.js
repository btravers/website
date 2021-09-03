import * as React from "react"

const styles = {
    container: {
        display: "flex",
        flexDirection: "row",

        fontFamily: "Roboto",
        fontSize: "60px",
        fontWeight: 300,
        color: "#2B2D42",
    },
    bracket: {
        fontSize: "119px",
        fontWeight: 100,
        lineHeight: "100%",
    },
    body: {
        marginLeft: "0.3em",
        marginRight: "0.3em",
        lineHeight: "100%",
    },
    highlight: {
        color: "#EF233C",
    } 
}

const Logo = () => (
    <div style={styles.container}>
        <div style={styles.bracket}>&#123;</div>
        <div style={styles.body}>
            <div>BΞN<span style={styles.highlight}>.IT</span></div>
            <div>TR<span style={styles.highlight}>ΛV</span>ΞRS</div>
        </div>
        <div style={styles.bracket}>&#125;</div>
    </div>
)

export default Logo