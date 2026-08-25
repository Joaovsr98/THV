import styles from './Button.module.css';

/**
 * Botão reutilizável. Renderiza <a> quando recebe href, senão <button>.
 * variant: 'primary' | 'whatsapp' | 'outline' | 'ghost'
 * size: 'md' | 'lg'
 */
export function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconRight: IconRight,
  external = false,
  className = '',
  type = 'button',
  ...rest
}) {
  const cls = `${styles.btn} ${styles[variant]} ${styles[size]} ${className}`.trim();
  const content = (
    <>
      {Icon && <Icon className={styles.icon} size={20} strokeWidth={2.2} aria-hidden="true" />}
      <span>{children}</span>
      {IconRight && (
        <IconRight className={styles.iconRight} size={18} strokeWidth={2.4} aria-hidden="true" />
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={cls}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={cls} onClick={onClick} {...rest}>
      {content}
    </button>
  );
}

export default Button;
