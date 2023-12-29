export function Footer() {
    return (
        <footer style={{
            textAlign: 'center',
            backdropFilter: 'blur(20px)',
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            fontSize: 12
        }}>
            <p>&copy; 2023 Easy Message. All rights reserved. | <a href="/privacy">Privacy Policy</a> | <a
                href="/term-service">Terms of Service</a></p>
        </footer>
    )
}