export function Footer() {
    return (
        <footer style={{
            textAlign: 'center',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            fontSize: 12
        }}>
            <p>&copy; 2023 Easy Message. All rights reserved. | <a href="/privacy">Privacy Policy</a> | <a
                href="/term-service">Terms of Service</a></p>
        </footer>
    )
}