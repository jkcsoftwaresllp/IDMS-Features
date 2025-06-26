// =============================================================================
// CONSTANTS - For better autocomplete and avoiding typos
// =============================================================================

const FEATURE_STATES = {
  NOT_STARTED: "not-started",
  SOON: "soon",
  ONGOING: "ongoing",
  COMPLETED: "completed",
  ON_HOLD: "on-hold"
};

// =============================================================================
// FEATURE DATA - UPDATE THIS SECTION TO MANAGE FEATURES
// =============================================================================
// Instructions for team members:
// 1. To add a new feature: Add it to the features array with state: FEATURE_STATES.NOT_STARTED
// 2. To update feature status: Change the 'state' value to one of:
//    - FEATURE_STATES.NOT_STARTED (gray)
//    - FEATURE_STATES.SOON (pink)
//    - FEATURE_STATES.ONGOING (blue)
//    - FEATURE_STATES.COMPLETED (green with strikethrough)
//    - FEATURE_STATES.ON_HOLD (orange)
// 3. Save the file after making changes
// =============================================================================

const FEATURES_DATA = {
  title: "Inventory & Distribution Management System",
  subtitle: "Comprehensive Feature Specification",

  sections: [
    // =========================================================================
    // SYSTEM MODULE
    // =========================================================================
    {
      id: "system",
      title: "System Module",
      icon: "⚙️",
      iconClass: "inventory",
      subsections: [
        {
          title: "Authentication & Authorization",
          features: [
            { name: "Platform users management", state: FEATURE_STATES.ONGOING },
            { name: "Organization users management", state: FEATURE_STATES.ONGOING },
            { name: "RBAC system implementation", state: FEATURE_STATES.SOON },
            { name: "Multi-tenant authentication", state: FEATURE_STATES.SOON },
            { name: "Session management", state: FEATURE_STATES.ONGOING },
            { name: "Two-factor authentication", state: FEATURE_STATES.ON_HOLD},
            { name: "API key management", state: FEATURE_STATES.ON_HOLD},
            { name: "Password reset functionality", state: FEATURE_STATES.ON_HOLD}
          ]
        },
        {
          title: "Organization & Subscription",
          features: [
            { name: "Multi-tenant data isolation", state: FEATURE_STATES.NOT_STARTED },
            { name: "Organization provisioning", state: FEATURE_STATES.NOT_STARTED },
            { name: "Subscription plan management", state: FEATURE_STATES.NOT_STARTED },
            { name: "Usage tracking and limits", state: FEATURE_STATES.NOT_STARTED },
            { name: "Payment processing integration", state: FEATURE_STATES.NOT_STARTED },
            { name: "Billing cycle management", state: FEATURE_STATES.NOT_STARTED },
            { name: "Trial-to-paid conversion", state: FEATURE_STATES.NOT_STARTED }
          ]
        },
        {
          title: "Demo & Audit",
          features: [
            { name: "Demo environment automation", state: FEATURE_STATES.NOT_STARTED },
            { name: "Sample data seeding", state: FEATURE_STATES.NOT_STARTED },
            { name: "System-wide audit trails", state: FEATURE_STATES.NOT_STARTED },
            { name: "Compliance logging", state: FEATURE_STATES.NOT_STARTED },
            { name: "Security incident logging", state: FEATURE_STATES.NOT_STARTED }
          ]
        }
      ]
    },

    // =========================================================================
    // OPERATIONS MODULE
    // =========================================================================
    {
      id: "operations",
      title: "Operations Module",
      icon: "📦",
      iconClass: "operational",
      subsections: [
        {
          title: "Product & Inventory",
          features: [
            { name: "Create product catalog", state: FEATURE_STATES.NOT_STARTED },
            { name: "Add products with variants", state: FEATURE_STATES.NOT_STARTED },
            { name: "SKU management", state: FEATURE_STATES.NOT_STARTED },
            { name: "Add warehouses", state: FEATURE_STATES.NOT_STARTED },
            { name: "Inventory batch management", state: FEATURE_STATES.NOT_STARTED },
            { name: "Stock level tracking", state: FEATURE_STATES.NOT_STARTED },
            { name: "Inventory transfers", state: FEATURE_STATES.NOT_STARTED },
            { name: "Stock alerts and notifications", state: FEATURE_STATES.NOT_STARTED }
          ]
        },
        {
          title: "Customer & Supplier Management",
          features: [
            { name: "Customer profile management", state: FEATURE_STATES.NOT_STARTED },
            { name: "CRM integration", state: FEATURE_STATES.NOT_STARTED },
            { name: "Customer blacklist management", state: FEATURE_STATES.NOT_STARTED },
            { name: "Supplier management", state: FEATURE_STATES.NOT_STARTED },
            { name: "Supplier performance tracking", state: FEATURE_STATES.NOT_STARTED },
            { name: "Transport partner management", state: FEATURE_STATES.NOT_STARTED },
            { name: "Purchase order management", state: FEATURE_STATES.NOT_STARTED }
          ]
        },
        {
          title: "Offers & Communication",
          features: [
            { name: "Promotional offers creation", state: FEATURE_STATES.NOT_STARTED },
            { name: "Offer scheduling", state: FEATURE_STATES.NOT_STARTED },
            { name: "Coupon code generation", state: FEATURE_STATES.NOT_STARTED },
            { name: "Inter-organization channels", state: FEATURE_STATES.NOT_STARTED },
            { name: "Team collaboration tools", state: FEATURE_STATES.NOT_STARTED },
            { name: "Operational audit trails", state: FEATURE_STATES.NOT_STARTED }
          ]
        }
      ]
    },

    // =========================================================================
    // ANALYTICS MODULE
    // =========================================================================
    {
      id: "analytics",
      title: "Analytics & Reporting",
      icon: "📊",
      iconClass: "analytics",
      subsections: [
        {
          title: "Report Types",
          features: [
            { name: "Stock & Sales Summary", state: FEATURE_STATES.NOT_STARTED },
            { name: "Supplier performance", state: FEATURE_STATES.NOT_STARTED },
            { name: "Invoice (search by inv. no.)", state: FEATURE_STATES.NOT_STARTED },
            { name: "Customer Purchase", state: FEATURE_STATES.NOT_STARTED },
            { name: "Expenses", state: FEATURE_STATES.NOT_STARTED },
            { name: "Stock Issues", state: FEATURE_STATES.NOT_STARTED },
            { name: "Credit", state: FEATURE_STATES.NOT_STARTED },
            { name: "Sales", state: FEATURE_STATES.NOT_STARTED },
            { name: "Revenue", state: FEATURE_STATES.NOT_STARTED },
            { name: "HSN", state: FEATURE_STATES.NOT_STARTED }
          ]
        },
        {
          title: "Report Features",
          features: [
            { name: "Export to PDF/CSV", state: FEATURE_STATES.NOT_STARTED },
            { name: "Show selected columns", state: FEATURE_STATES.NOT_STARTED },
            { name: "Search rows", state: FEATURE_STATES.NOT_STARTED },
            { name: "Select Date range", state: FEATURE_STATES.NOT_STARTED },
            { name: "Sort table", state: FEATURE_STATES.NOT_STARTED },
            { name: "Pagination", state: FEATURE_STATES.NOT_STARTED }
          ]
        }
      ]
    },

    // =========================================================================
    // SALES MODULE
    // =========================================================================
    {
      id: "sales",
      title: "Sales Module",
      icon: "🛒",
      iconClass: "customer-portal",
      subsections: [
        {
          title: "Customer Portal",
          features: [
            { name: "Product catalog browsing", state: FEATURE_STATES.NOT_STARTED },
            { name: "Advanced product search & filtering", state: FEATURE_STATES.NOT_STARTED },
            { name: "Product comparison", state: FEATURE_STATES.NOT_STARTED },
            { name: "Wishlist management", state: FEATURE_STATES.NOT_STARTED },
            { name: "Customer profile management", state: FEATURE_STATES.NOT_STARTED },
            { name: "Order history access", state: FEATURE_STATES.NOT_STARTED },
            { name: "Product reviews and ratings", state: FEATURE_STATES.NOT_STARTED },
            { name: "Support ticket system", state: FEATURE_STATES.NOT_STARTED }
          ]
        },
        {
          title: "Order Portal",
          features: [
            { name: "POS checkout interface", state: FEATURE_STATES.NOT_STARTED },
            { name: "Order management system", state: FEATURE_STATES.NOT_STARTED },
            { name: "Real-time order tracking", state: FEATURE_STATES.NOT_STARTED },
            { name: "Invoice generation & printing", state: FEATURE_STATES.NOT_STARTED },
            { name: "Return request processing", state: FEATURE_STATES.NOT_STARTED },
            { name: "Notification system", state: FEATURE_STATES.NOT_STARTED },
            { name: "Promotional campaigns", state: FEATURE_STATES.NOT_STARTED },
            { name: "Payment processing", state: FEATURE_STATES.NOT_STARTED }
          ]
        }
      ]
    }
  ]
};

// =============================================================================
// APPLICATION CODE - Simple display only
// =============================================================================

function generateHTML(data) {
  return `
    <div class="header">
      <h1>${data.title}</h1>
      <div class="subtitle">${data.subtitle}</div>
    </div>

    <div class="legend">
      <div class="legend-items">
        <div class="legend-item">
          <div class="legend-color not-started"></div>
          <span>Not Started</span>
        </div>
        <div class="legend-item">
          <div class="legend-color soon"></div>
          <span>Coming Soon</span>
        </div>
        <div class="legend-item">
          <div class="legend-color ongoing"></div>
          <span>In Progress</span>
        </div>
        <div class="legend-item">
          <div class="legend-color completed"></div>
          <span>Completed</span>
        </div>
        <div class="legend-item">
          <div class="legend-color on-hold"></div>
          <span>On Hold</span>
        </div>
      </div>
    </div>

    <div class="sections">
      ${data.sections.map(section => `
        <div class="section">
          <div class="section-header">
            <div class="section-icon ${section.iconClass}">${section.icon}</div>
            <div class="section-title">${section.title}</div>
          </div>
          ${section.subsections.map(subsection => `
            <div class="subsection">
              <div class="subsection-title">${subsection.title}</div>
              <ul class="feature-list">
                ${subsection.features.map(feature => `
                  <li class="feature-item ${feature.state}">${feature.name}</li>
                `).join('')}
              </ul>
            </div>
          `).join('')}
        </div>
      `).join('')}
    </div>
  `;
}

function initApp() {
  document.getElementById('content').innerHTML = generateHTML(FEATURES_DATA);
}

document.addEventListener('DOMContentLoaded', initApp);
